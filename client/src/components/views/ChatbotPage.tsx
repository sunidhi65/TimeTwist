import React, { useState } from "react";
import { ChatbotPageProps, BotMessage, View } from "../../types";
import Button from "../ui/Button";
import Card from "../ui/Card";

const ChatbotPage: React.FC<ChatbotPageProps> = ({ user, onNavigate }) => {
  const [messages, setMessages] = useState<BotMessage[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // user message
    const userMsg: BotMessage = { role: "user", text: input };

    // fake bot response (mock AI)
    const botMsg: BotMessage = {
      role: "bot",
      text: `Greetings ${user.username}, you asked: "${input}" (mock response).`,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">🤖 Chatbot</h1>
        <Button onClick={() => onNavigate(View.DASHBOARD)}>&larr; Back</Button>
      </div>

      {/* Chat Window */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((m, i) => (
          <Card
            key={i}
            className={`p-3 rounded-2xl max-w-lg ${
              m.role === "user"
                ? "bg-green-600 self-end ml-auto"
                : "bg-purple-700 self-start mr-auto"
            }`}
          >
            {m.text}
          </Card>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 flex bg-gray-800">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-lg text-black"
          placeholder="Ask me something..."
        />
        <Button onClick={handleSend} className="ml-2">
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatbotPage;
