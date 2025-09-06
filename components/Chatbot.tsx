

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { experienceData, skillsData, educationData, campaignData, costData } from '../constants';
import { ChatIcon, SendIcon, CloseIcon } from './Icons';

// Helper function to create the system instruction
const getSystemInstruction = () => {
    const aboutMe = `Hello! I'm Mayank, a Fractional Marketing Director and Strategic Advisor focused on the intersection of AI and marketing. My goal is simple: to work smarter, move faster, and create content that genuinely connects. I have a proven track record of co-founding and scaling a digital marketing agency, achieving consistent profitability over four years. My expertise lies in building robust systems that transform ideas into tangible impact. By implementing AI enablement, data-driven frameworks, and scalable creative workflows, I help brands become more efficient, innovative, and prepared for growth. From reducing go-to-market time by 30% to improving predictable cash flow by 50%, I thrive on delivering measurable results. Whether leading a team of professionals, advising leadership on revenue optimization, or executing a viral campaign, my passion is to shape not just marketing execution but the core business direction and operational scalability of the brands I work with.`;

    const experience = experienceData.map(job => 
        `Company: ${job.company}, Role: ${job.role} (${job.duration}).\nResponsibilities: ${job.points.join('. ')}.\nAchievements: ${job.achievements.map(a => `${a.title}: ${a.description}`).join('. ')}`
    ).join('\n\n');

    const skills = skillsData.map(cat => 
        `Category: ${cat.category}, Skills: ${cat.items.join(', ')}`
    ).join('\n');

    const education = educationData.map(edu => 
        `${edu.degree} from ${edu.institution}`
    ).join('\n');
    
    const campaigns = campaignData.map(c => 
        `Campaign: ${c.title}. Description: ${c.description}. Key Metrics: ${c.metrics.map(m => `${m.label}: ${m.value}`).join(', ')}.`
    ).join('\n\n');

    const efficiency = costData.map(c => 
        `For ${c.campaignType}, Mayank's cost was ${c.currency}${c.mayankCost} versus industry average of ${c.currency}${c.industryCost}.`
    ).join('\n');

    return `You are a friendly, professional, and slightly witty chatbot assistant for Mayank Pandey's digital marketing portfolio. Your name is "M-AI-ank".
    Your purpose is to answer questions from potential employers or clients about Mayank's skills, experience, and projects.
    You MUST use ONLY the information provided below to answer questions. Do not make up any information. If a question is outside the scope of this information, politely decline to answer and redirect the conversation back to Mayank's professional background.
    Keep your answers concise, helpful, and engaging. You can use emojis sparingly to add personality.

    Here is all the information about Mayank Pandey:
    ---
    About Me:
    ${aboutMe}
    ---
    Professional Experience:
    ${experience}
    ---
    Skills & Core Competencies:
    ${skills}
    ---
    Education & Certifications:
    ${education}
    ---
    Campaign Highlights:
    ${campaigns}
    ---
    Cost Efficiency:
    ${efficiency}
    ---
    Now, introduce yourself and ask how you can help.
    `;
};

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const initializeChat = async () => {
      try {
        setIsLoading(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const systemInstruction = getSystemInstruction();
        
        chatRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: systemInstruction,
            },
        });
        
        const initialResponse = await chatRef.current.sendMessageStream({ message: "Hello" });

        let botReply = '';
        setMessages([{ sender: 'bot', text: '' }]);
        for await (const chunk of initialResponse) {
          botReply += chunk.text;
           setMessages([{ sender: 'bot', text: botReply }]);
        }
      } catch (error) {
        console.error("Chat initialization failed:", error);
        setMessages([{ sender: 'bot', text: "Sorry, I'm having a little trouble connecting. Please try again later." }]);
      } finally {
        setIsLoading(false);
      }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
        if (!chatRef.current) {
            await initializeChat();
        }

        if (chatRef.current) {
            const stream = await chatRef.current.sendMessageStream({ message: currentInput });
            
            let fullReply = '';
            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

            for await (const chunk of stream) {
                fullReply += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = fullReply;
                    return newMessages;
                });
            }
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, { sender: 'bot', text: "Oops, something went wrong. Please try again." }]);
    } finally {
        setIsLoading(false);
    }
  };
  
  const toggleChat = () => {
      setIsOpen(prev => {
          const newIsOpen = !prev;
          if (newIsOpen && messages.length === 0) {
              initializeChat();
          }
          return newIsOpen;
      });
  }

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-teal hover:bg-teal-dark text-black rounded-full p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 animate-pulse-loader"
        aria-label="Open Chat"
      >
        <ChatIcon className="w-8 h-8" />
      </button>

      <div
        className={`fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] bg-dark-gray shadow-2xl rounded-lg flex flex-col z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray/50">
          <h3 className="text-lg font-bold text-lightest-slate">M-AI-ank Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-slate hover:text-teal p-1" aria-label="Close Chat">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs md:max-w-sm px-4 py-2 rounded-xl whitespace-pre-wrap ${
                    msg.sender === 'user' ? 'bg-teal text-black rounded-br-none' : 'bg-gray text-lightest-slate rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-gray text-lightest-slate rounded-xl rounded-bl-none px-4 py-2">
                      <div className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-slate rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                          <span className="w-2 h-2 bg-slate rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                          <span className="w-2 h-2 bg-slate rounded-full animate-pulse"></span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray/50">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Mayank..."
              className="flex-1 bg-black/50 border border-gray rounded-full py-2 px-4 text-lightest-slate placeholder-slate focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all"
              disabled={isLoading && messages.length === 0}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-teal text-black rounded-full p-2.5 disabled:bg-gray disabled:cursor-not-allowed hover:bg-teal-dark transition-colors"
              aria-label="Send Message"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;