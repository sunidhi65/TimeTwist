import React, { useState, useEffect, useRef } from "react";
import { ChatbotPageProps, View } from "../../types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from "../ui/Button";

interface ChatHistoryMessage {
  role: "user" | "model";
  text: string;
  timestamp?: Date;
}

const genAI = new GoogleGenerativeAI("AIzaSyBkT4mTTBGrGHNg-Ixa46CEAU9qYKgxwYo");

const ChatbotPage: React.FC<ChatbotPageProps> = ({ user, onNavigate }) => {
  const [chatHistory, setChatHistory] = useState<ChatHistoryMessage[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    setChatHistory([
      {
        role: "model",
        text: `Greetings, ${user.username}. I am the Archmage Mentor of TimeTwist. Ask, and I shall help you unravel the threads of knowledge.`,
        timestamp: new Date(),
      },
    ]);
  }, [user.username]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chatHistory]);

  const formatTime = (date: Date): string =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleSendMessage = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput || isLoading) return;

    const newUserMessage: ChatHistoryMessage = {
      role: "user",
      text: trimmedInput,
      timestamp: new Date(),
    };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: trimmedInput }] }],
      });

      const responseText = result.response.text();
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: responseText, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "⚠️ The Archmage’s connection faltered. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      
      {/* Header */}
      <header className="chat-header">
        <Button onClick={() => onNavigate(View.DASHBOARD)}>← Back</Button>
        <h1>Oracle's Sanctum</h1>
        <div className="chat-status">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Archmage Online</span>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="chat-messages">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.role === "user" ? "user" : "bot"}`}
            dangerouslySetInnerHTML={{
              __html: msg.text.replace(/\n/g, "<br />"),
            }}
          />
        ))}

        {isLoading && (
          <div className="chat-bubble bot flex gap-2 items-center">
            <span>The Archmage is thinking</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Footer */}
      <footer className="chat-footer">
        <form onSubmit={handleSendMessage} className="flex w-full gap-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask the Archmage for wisdom..."
            className="chat-input"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="chat-send-btn"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatbotPage;
