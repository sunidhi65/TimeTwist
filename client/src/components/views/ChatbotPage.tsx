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

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

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
      const modelMessage: ChatHistoryMessage = {
        role: "model",
        text: responseText,
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "The Archmage's connection to the arcane has faltered. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        const formEvent = new Event("submit", { bubbles: true, cancelable: true });
        form.dispatchEvent(formEvent);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Header */}
      <header className="z-10 p-6 border-b border-purple-700/50 backdrop-blur-sm bg-black/20">
        <div className="flex items-center justify-between">
          <Button
            onClick={() => onNavigate(View.DASHBOARD)}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-400 hover:to-yellow-400 px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Button>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-rune-gold drop-shadow-md">
              Oracle's Sanctum
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-300">Archmage Online</span>
            </div>
          </div>

          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-5 py-3 rounded-2xl shadow-lg max-w-[75%] whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-white/90 text-gray-900 border border-gray-200/50"
              }`}
              dangerouslySetInnerHTML={{
                __html: msg.text.replace(/\n/g, "<br />"),
              }}
            />
            <span
              className={`text-xs text-gray-400 mt-1 ${
                msg.role === "user" ? "ml-2" : "mr-2"
              }`}
            >
              {msg.timestamp && formatTime(msg.timestamp)}
            </span>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/90 text-gray-900 px-5 py-3 rounded-2xl shadow-md border border-gray-200/50 flex gap-2 items-center">
              <span>The Archmage is thinking</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input */}
      <footer className="p-4 border-t border-purple-700/50 bg-black/20 backdrop-blur-sm">
        <form
          onSubmit={handleSendMessage}
          className="flex items-center gap-3"
        >
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask the Archmage for wisdom..."
            className="flex-1 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/95 shadow-md"
            disabled={isLoading}
            maxLength={500}
          />
          <Button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:scale-105 transition-transform disabled:opacity-50"
          >
            Send
          </Button>
        </form>
      </footer>
    </div>
  );
};

export default ChatbotPage;
