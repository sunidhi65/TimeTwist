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

  // Add styles dynamically
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'chatbot-animations';
    styleSheet.textContent = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
        }
      }

      @keyframes float-delayed {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-15px) rotate(-180deg);
        }
      }

      @keyframes float-slow {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-10px) rotate(90deg);
        }
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
        animation-delay: 2s;
      }

      .animate-float-slow {
        animation: float-slow 10s ease-in-out infinite;
        animation-delay: 4s;
      }

      .scrollbar-thin::-webkit-scrollbar {
        width: 6px;
      }

      .scrollbar-thin::-webkit-scrollbar-track {
        background: transparent;
      }

      .scrollbar-thin::-webkit-scrollbar-thumb {
        background-color: rgba(147, 51, 234, 0.5);
        border-radius: 20px;
      }

      .scrollbar-thin::-webkit-scrollbar-thumb:hover {
        background-color: rgba(147, 51, 234, 0.8);
      }

      .chatbot-bounce-1 {
        animation-delay: 0s;
      }

      .chatbot-bounce-2 {
        animation-delay: 0.1s;
      }

      .chatbot-bounce-3 {
        animation-delay: 0.2s;
      }
    `;
    
    // Check if style already exists
    const existingStyle = document.getElementById('chatbot-animations');
    if (!existingStyle) {
      document.head.appendChild(styleSheet);
    }

    return () => {
      const styleElement = document.getElementById('chatbot-animations');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  useEffect(() => {
    setChatHistory([
      {
        role: "model",
        text: `✨ Greetings, ${user.username}. I am the Archmage Mentor of TimeTwist. The ancient knowledge flows through me like starlight through crystal. What mysteries shall we unravel together?`,
        timestamp: new Date(),
      },
    ]);
  }, [user.username]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput || isLoading) return;

    const newUserMessage: ChatHistoryMessage = { 
      role: "user", 
      text: trimmedInput,
      timestamp: new Date()
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
        timestamp: new Date()
      };
      setChatHistory((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setChatHistory((prev) => [
        ...prev,
        { 
          role: "model", 
          text: "🔮 The Archmage's connection to the ethereal realm has faltered. The cosmic energies are disrupted. Please try channeling your question once more.",
          timestamp: new Date()
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
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        const formEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(formEvent);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-purple-700/50 backdrop-blur-sm bg-black/10">
        <div className="flex items-center justify-between">
          <Button 
            onClick={() => onNavigate(View.DASHBOARD)} 
            className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 px-4 py-2 rounded-xl font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold font-pixel text-rune-gold drop-shadow-lg">
              Oracle's Sanctum
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-300 font-medium">Archmage Online</span>
            </div>
          </div>
          
          <div className="w-32" aria-hidden="true" /> {/* Spacer for balance */}
        </div>
      </header>

      {/* Chat area */}
      <main className="relative z-10 flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-purple-600/50 scrollbar-track-transparent">
        {chatHistory.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <h3 className="text-xl font-semibold text-purple-200">Begin Your Journey</h3>
            <p className="text-purple-300/80 max-w-md">
              The Archmage awaits your questions. Ask about ancient wisdom, magical knowledge, or seek guidance for your quest.
            </p>
          </div>
        )}

        {chatHistory.map((msg: ChatHistoryMessage, index: number) => (
          <div
            key={`message-${index}`}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`flex items-start gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg ring-2 ring-white/20 ${
                msg.role === "user" 
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600" 
                  : "bg-gradient-to-br from-yellow-500 to-orange-500"
              }`}>
                {msg.role === "user" ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )}
              </div>

              {/* Message bubble */}
              <div className={`group ${msg.role === "user" ? "text-right" : ""}`}>
                <div
                  className={`px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm whitespace-pre-wrap transform hover:scale-[1.02] transition-transform duration-200 ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-purple-600/90 to-indigo-600/90 text-white border border-purple-400/30"
                      : "bg-gray-100/95 text-gray-900 border border-gray-200/50"
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, "<br />") }}
                />
                
                {/* Timestamp */}
                {msg.timestamp && (
                  <div className={`text-xs opacity-60 text-white mt-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                    {formatTime(msg.timestamp)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in-up">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg ring-2 ring-white/20">
                <svg className="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="bg-gray-100/95 text-gray-900 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50">
                <div className="flex items-center gap-3">
                  <span className="text-sm">The Archmage consults the ancient texts</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce chatbot-bounce-1"></span>
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce chatbot-bounce-2"></span>
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce chatbot-bounce-3"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input area */}
      <footer className="relative z-10 p-6 border-t border-purple-700/50 backdrop-blur-sm bg-purple-950/30">
        <form onSubmit={handleSendMessage} className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask the Archmage for wisdom..."
              className="w-full rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 transition-all duration-300"
              disabled={isLoading}
              maxLength={500}
              autoComplete="off"
              spellCheck="true"
              aria-label="Ask the Archmage a question"
            />
            {userInput.length > 0 && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {userInput.length}/500
                </div>
              </div>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed font-semibold flex items-center gap-2"
            aria-label={isLoading ? "Sending message..." : "Send message"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </form>
        
        <div className="mt-3 text-center">
          <p className="text-xs text-purple-300/70">
            Press <kbd className="px-2 py-1 bg-purple-800/50 rounded border border-purple-600/50 text-purple-200">Enter</kbd> to send your message
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatbotPage;