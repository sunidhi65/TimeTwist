// src/components/views/ChatbotPage.tsx
import React, { useState } from "react";
import { ChatbotPageProps, BotMessage, View } from "../../types";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { evaluateExplanation, AIFeedback } from "../../../services/geminiService";

const ChatbotPage: React.FC<ChatbotPageProps> = ({ user, onNavigate }) => {
  const [messages, setMessages] = useState<BotMessage[]>([
    {
      role: "bot",
      text: `Welcome, ${user.username}. I am the Archmage Mentor. Share your reasoning and I will guide you—without giving away answers.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: BotMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // We don't need a real answer string; your evaluator scores the explanation itself.
      const fb: AIFeedback = await evaluateExplanation("", trimmed);

      // Build a readable bot reply from feedback
      const suggestions =
        fb.improvements && fb.improvements.length
          ? fb.improvements.map((s, i) => `• ${s}`).join("\n")
          : "• Keep refining your reasoning with clear steps and logical connectors.";

      const botReply: BotMessage = {
        role: "bot",
        text:
          `${fb.title}\n` +
          `Score: ${fb.score}/10\n\n` +
          `${fb.strengths}\n\n` +
          `Suggestions:\n${suggestions}`,
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Local evaluation failed:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "A disturbance in the aether disrupted the evaluation. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">🧙 Oracle’s Sanctum</h1>
        <Button onClick={() => onNavigate(View.DASHBOARD)}>&larr; Back</Button>
      </div>

      {/* Chat Window */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((m, i) => (
          <Card
            key={i}
            className={`p-3 rounded-2xl max-w-xl ${
              m.role === "user"
                ? "bg-green-600 self-end ml-auto"
                : "bg-purple-700 self-start mr-auto"
            } whitespace-pre-wrap`}
          >
            {m.text}
          </Card>
        ))}

        {isLoading && (
          <Card className="p-3 rounded-2xl max-w-xl bg-purple-800 self-start mr-auto">
            <span className="opacity-80">The Oracle is contemplating…</span>
          </Card>
        )}
      </div>

      {/* Input */}
      <div className="p-4 flex bg-gray-800 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 rounded-lg text-black"
          placeholder="Explain your reasoning or ask for conceptual guidance…"
          disabled={isLoading}
        />
        <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatbotPage;

