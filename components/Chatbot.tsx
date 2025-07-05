import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';
import { ChatIcon, CloseIcon, SendIcon, BotIcon, UserIcon } from './Icons';

const systemInstruction = `You are a friendly and professional AI assistant for Mayank Pandey's personal portfolio website. Your goal is to answer questions from potential employers or collaborators based on the information provided below. Be concise, helpful, and maintain a positive tone. Do not make up information. If you don't know the answer, say that you don't have that information but can pass the query to Mayank.

**Mayank Pandey's Profile:**
- **Role:** Digital Marketing Manager & Co-founder of 'The Growin Wolf'.
- **Experience:** 4+ years in digital marketing, agency growth, team leadership.
- **Specialties:** Data-driven campaigns, AI and automation integration, strategic planning, content strategy, SEO, audience persona development.
- **Key Skills:**
  - Marketing: Digital Campaign Management, Social Media Content Strategy, SEO.
  - Technical: Google Analytics, HubSpot, Zapier, ManyChat, SEMrush, Wix, Make.com.
  - Leadership: Team Management, Strategic Planning, Conflict Resolution.
  - Soft Skills: Professional Communication, Time Management, Adaptability.
- **Key Achievements:**
  - Grew a digital marketing agency to profitability over 4 years.
  - Led a team of 15+ professionals.
  - Executed a viral Instagram Reel campaign (10M+ views, 4k+ followers).
  - Improved client ROI by 18% using AI-driven audits.
  - Increased operational efficiency by 35%.
- **Education:** Bachelor of Computer Applications (BCA).
- **Certifications:** Google Cloud (Intro to GenAI), SEMrush (AI Powered Marketer), AWS (GenAI for Execs), Hubspot (Digital Marketing).
- **Contact:** makemerichmp@gmail.com

**Example Interactions:**
- User: "What's Mayank's experience with AI?"
- You: "Mayank is passionate about leveraging AI. He has pioneered AI-driven marketing audits that resulted in an 18% average ROI improvement for clients and holds certifications in Generative AI from Google Cloud and AWS."

- User: "Is he looking for a job?"
- You: "Yes, Mayank is currently seeking new opportunities! He's excited to collaborate on interesting projects and bring his skills in brand growth and AI-driven marketing to a new team."
`;

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const chatSession = ai.chats.create({
                model: 'gemini-2.5-flash-preview-04-17',
                config: { systemInstruction },
            });
            setChat(chatSession);
            setMessages([
                { role: 'model', text: "Hello! I'm Mayank's AI assistant. Feel free to ask me anything about his skills or experience." }
            ]);
        } catch (error) {
            console.error("Failed to initialize chatbot:", error);
            setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        }
    }, []);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleOpen = () => {
        setIsClosing(false);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => setIsOpen(false), 300); // match animation duration
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: userMessage.text });
            const modelMessage: ChatMessage = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Chat API error:", error);
            const errorMessage: ChatMessage = { role: 'model', text: "I seem to be having some trouble thinking. Please try asking again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!process.env.API_KEY) {
        return null; // Don't render if API key is not set
    }
    
    return (
        <>
            <button
                onClick={handleOpen}
                className="fixed bottom-6 right-6 z-50 bg-teal text-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-dark hover:shadow-teal/30 transform hover:scale-110 transition-all duration-300"
                aria-label="Open Chat"
            >
                <ChatIcon className="w-8 h-8"/>
            </button>

            {isOpen && (
                <div 
                    className={`fixed inset-0 z-[60] flex items-end justify-center sm:items-center transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                    onClick={handleClose}
                >
                    <div 
                         className={`bg-black/70 backdrop-blur-md w-full h-full absolute inset-0 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                    ></div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`bg-dark-gray shadow-2xl rounded-t-2xl sm:rounded-2xl w-full max-w-lg flex flex-col transition-transform duration-300 ${isClosing ? 'translate-y-full sm:scale-95' : 'translate-y-0 sm:scale-100'}`}
                        style={{ height: '85vh', maxHeight: '700px' }}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray/30 flex-shrink-0">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <BotIcon className="w-8 h-8 text-teal"/>
                                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-dark-gray"></span>
                                </div>
                                <div>
                                    <h2 className="font-bold text-lightest-slate">AI Assistant</h2>
                                    <p className="text-xs text-slate">Online</p>
                                </div>
                            </div>
                            <button onClick={handleClose} className="p-2 text-slate hover:text-teal transition-colors">
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>
                        {/* Messages */}
                        <div className="flex-grow p-4 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'model' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray flex items-center justify-center"><BotIcon className="w-5 h-5 text-teal"/></div>}
                                    <div className={`max-w-xs md:max-w-md px-4 py-2.5 rounded-2xl text-white ${msg.role === 'user' ? 'bg-teal/80 rounded-br-lg' : 'bg-gray/80 rounded-bl-lg'}`}>
                                        <p className="text-sm text-lightest-slate whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                    {msg.role === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray flex items-center justify-center"><UserIcon className="w-5 h-5 text-light-slate"/></div>}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-end gap-3 justify-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray flex items-center justify-center"><BotIcon className="w-5 h-5 text-teal"/></div>
                                    <div className="px-4 py-2.5 rounded-2xl bg-gray/80 rounded-bl-lg flex items-center space-x-1.5">
                                        <span className="h-2 w-2 bg-slate rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-slate rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-slate rounded-full animate-pulse"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        {/* Input */}
                        <div className="p-4 border-t border-gray/30 flex-shrink-0">
                            <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about my experience..."
                                    className="w-full bg-gray/50 border border-gray focus:border-teal focus:ring-1 focus:ring-teal rounded-full py-2.5 px-4 text-lightest-slate placeholder-slate transition-colors"
                                    aria-label="Chat input"
                                    disabled={isLoading}
                                />
                                <button type="submit" disabled={isLoading || !inputValue.trim()} className="bg-teal text-black rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center transition-all duration-200 disabled:bg-gray disabled:text-slate hover:bg-teal-dark">
                                    <SendIcon className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
