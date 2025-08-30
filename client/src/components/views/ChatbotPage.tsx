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
    <div className="chatbot-page px-6 py-6">
      <Button onClick={() => onNavigate(View.DASHBOARD)} className="mb-8">
        ← Back to Dashboard
      </Button>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-pixel text-rune-gold drop-shadow-md">
          Oracle's Sanctum
        </h1>
        <p className="text-purple-300/80 mt-2">
          The Archmage Mentor is here to answer your questions.
        </p>
      </div>

      <Card className="chatbot-card p-4 flex flex-col h-[70vh]">
        {/* Chat history */}
        <div className="chat-history flex-1 overflow-y-auto pr-2 space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-md text-sm leading-relaxed
                  ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white self-end"
                      : "bg-gray-200 text-gray-900"
                  }`}
              >
                <p
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, "<br />") }}
                />
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 px-4 py-2 rounded-2xl shadow-md flex gap-2">
                <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSendMessage}
          className="chat-input-form flex items-center gap-2 mt-4"
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask the Archmage a question..."
            className="flex-1 rounded-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
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
      </Card>
    </div>
  );
};

export default ChatbotPage;
