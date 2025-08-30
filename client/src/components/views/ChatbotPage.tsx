import React, { useState, useEffect, useRef } from 'react';
import { ChatbotPageProps, View } from '../../types';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Button from '../ui/Button';
import Card from '../ui/Card';

// Define a simple message type for the history
interface ChatHistoryMessage {
  role: 'user' | 'model';
  text: string;
}

const ChatbotPage: React.FC<ChatbotPageProps> = ({ user, onNavigate }) => {
  const [chatSession, setChatSession] = useState<any>(null);
  const [chatHistory, setChatHistory] = useState<ChatHistoryMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session
  useEffect(() => {
    const initChat = async () => {
      if (!process.env.REACT_APP_API_KEY) {
        setChatHistory([
          {
            role: 'model',
            text: "The Oracle is silent. The ancient API key is missing from the environment."
          }
        ]);
        return;
      }

      try {
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const chat = model.startChat({
          history: [],
          generationConfig: {
            temperature: 0.7
          },
          systemInstruction: `You are the Archmage Mentor for TimeTwist, a learning platform for engineering students. 
            Your tone is wise, encouraging, and a little bit magical. Students will ask you for help with their engineering subjects. 
            Guide them by asking leading questions and explaining concepts. Do NOT give direct answers to homework. 
            Start the conversation by introducing yourself and welcoming the student, ${user.username}.`
        });

        setChatSession(chat);

        // Welcome message
        setIsLoading(true);
        const response = await chat.sendMessage("Introduce yourself.");
        const text = await response.response.text();
        setChatHistory([{ role: 'model', text }]);
      } catch (error) {
        console.error("Error starting chat:", error);
        setChatHistory([
          {
            role: 'model',
            text: "A disturbance in the aether has silenced me. Please try again later."
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    initChat();
  }, [user.username]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chatSession) return;

    const userMessage: ChatHistoryMessage = { role: 'user', text: userInput.trim() };
    setChatHistory(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage(userMessage.text);
      const text = await response.response.text();
      const modelMessage: ChatHistoryMessage = { role: 'model', text };
      setChatHistory(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      const errorMessage: ChatHistoryMessage = {
        role: 'model',
        text: "My apologies, a spell fizzled. The connection to the arcane knowledge was lost. Please repeat your question."
      };
      setChatHistory(prev => [...prev, errorMessage]);
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
        <h1 className="text-5xl font-bold font-pixel text-rune-gold">Oracle's Sanctum</h1>
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
                msg.role === 'user' ? 'user-message' : 'model-message'
              }`}
            >
              <div className="chat-bubble">
                <p className="font-sans">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message model-message">
              <div className="chat-bubble typing-indicator">
                <span></span><span></span><span></span>
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
              disabled={isLoading || !chatSession}
            />
            <Button type="submit" disabled={isLoading || !userInput.trim() || !chatSession}>
              Send
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ChatbotPage;
