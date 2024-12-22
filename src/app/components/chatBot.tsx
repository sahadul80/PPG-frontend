"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
export default function ChatBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
    const [userInput, setUserInput] = useState("");
    const chatboxRef = useRef<HTMLDivElement>(null);

    const toggleChatbox = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === "") return;

        const userMessage = { text: userInput, sender: "user" };
        setMessages((prevMessages: any) => [...prevMessages, userMessage]);
        setUserInput("");
        respondToUser(userInput);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    const respondToUser = (message: string) => {
        // Replace this with your chatbot logic
        setTimeout(() => {
            const botMessage = { text: "This is a response from the chatbot.", sender: "bot" };
            setMessages((prevMessages: any) => [...prevMessages, botMessage]);
            if (chatboxRef.current) {
                chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
            }
        }, 500);
    };

    return (
        <div>
            {/* Open Chat Button */}
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
                <button
                    onClick={toggleChatbox}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    PulseBot
                </button>
            </div>

            {/* Chatbox */}
            {isChatOpen && (
                <div className="fixed bottom-16 right-4 w-96">
                    <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                        {/* Chatbox Header */}
                        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                            <p className="text-lg font-semibold">Admin Bot</p>
                            <button
                                onClick={toggleChatbox}
                                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div id="chatbox" className="p-4 h-80 overflow-y-auto" ref={chatboxRef}>
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 ${message.sender === "user" ? "text-right" : ""}`}
                                >
                                    <p
                                        className={`${message.sender === "user"
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-700"
                                            } rounded-lg py-2 px-4 inline-block`}
                                    >
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Input Field */}
                        <div className="p-4 border-t flex">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyUp={handleKeyPress}
                                placeholder="Type a message"
                                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
