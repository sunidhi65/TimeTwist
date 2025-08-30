import React, { useState, useEffect, useRef } from "react";
import { ChatbotPageProps, View } from "../../types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from "../ui/Button";

interface ChatHistoryMessage {
  role: "user" | "model";
  text: string;
}

const genAI = new GoogleGenerativeAI("AIzaSyBkT4mTTBGrGHNg-Ixa46CEAU9qYKgxwYo");

const ChatbotPage: React.FC<ChatbotPageProps> = ({ user, onNavigate }) => {
  const [chatHistory, setChatHistory] = useState<ChatHistoryMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChatHistory([
      {
        role: "model",
        text: `Greetings, ${user.username}. I am the Archmage Mentor of TimeTwist. Ask, and I shall help you unravel the threads of knowledge.`,
      },
    ]);
  }, [user.username]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput || isLoading) return;

    const newUserMessage: ChatHistoryMessage = { role: "user", text: trimmedInput };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: trimmedInput }] }],
      });

      const responseText = result.response.text();
      const modelMessage: ChatHistoryMessage = { role: "model", text: responseText };
      setChatHistory((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "The Archmage’s connection faltered. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-950 to-indigo-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-purple-700 flex items-center justify-between">
        <Button onClick={() => onNavigate(View.DASHBOARD)} className="bg-gradient-to-r from-pink-500 to-yellow-500">
          ← Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold font-pixel text-rune-gold">Oracle's Sanctum</h1>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] shadow-md whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, "<br />") }}
            />
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl shadow-md flex gap-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-purple-700 flex items-center gap-2 bg-purple-950/80"
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask the Archmage..."
          className="flex-1 rounded-full px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !userInput.trim()}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:opacity-90"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatbotPage;
