import React, { useState, useEffect, useRef } from "react";
import { ChatbotPageProps, View } from "../../types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from "../ui/Button";
import Card from "../ui/Card";

// Define a simple message type for the history
interface ChatHistoryMessage {
  role: "user" | "model";
  text: string;
}

// ✅ Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(
  "AIzaSyBkT4mTTBGrGHNg-Ixa46CEAU9qYKgxwYo"
);

const ChatbotPage: React.FC<ChatbotPageProps> = ({ user, onNavigate }) => {
  const [chatHistory, setChatHistory] = useState<ChatHistoryMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Static welcome message
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

    // Add user message to UI
    const newUserMessage: ChatHistoryMessage = {
      role: "user",
      text: trimmedInput,
    };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      // ✅ Call Gemini API
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: trimmedInput }],
          },
        ],
      });

      const responseText = result.response.text();

      const modelMessage: ChatHistoryMessage = {
        role: "model",
        text: responseText,
      };

      setChatHistory((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      const errorMessage: ChatHistoryMessage = {
        role: "model",
        text: "⚠️ The Archmage’s connection to the arcane failed. Try again.",
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-page">
      <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
        &larr; Back to Dashboard
      </Button>
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold font-pixel text-rune-gold">
          Oracle's Sanctum
        </h1>
        <p className="text-purple-300/80 mt-2">
          The Archmage Mentor is here to answer your questions.
        </p>
      </div>

      <Card className="chatbot-card">
        <div className="chat-history">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.role === "user" ? "user-message" : "model-message"
              }`}
            >
              <div className="chat-bubble">
                <p
                  className="font-sans"
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(/\n/g, "<br />"),
                  }}
                ></p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message model-message">
              <div className="chat-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-container">
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask the Archmage a question..."
              className="chat-input form-input font-sans"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !userInput.trim()}>
              Send
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ChatbotPage;
