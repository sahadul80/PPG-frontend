import { useState } from "react";

export default function Popup() {
    const [activePopup, setActivePopup] = useState(null); // null, "subscribe", "chat", or "call"

    const togglePopup = (popupType: any) => {
        setActivePopup(activePopup === popupType ? null : popupType);
    };

    return (
        <>
            {/* Fixed Bottom Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-transpatent flex justify-center shadow-lg">
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
                    onClick={() => togglePopup("subscribe")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ width: '20px', height: '20px' }}
                    >
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </button>
                <button
                    className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600"
                    onClick={() => togglePopup("chat")}
                >
                    Chat
                </button>
                <button
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
                    onClick={() => togglePopup("call")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ width: '20px', height: '20px' }}
                    >
                        <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                    </svg>
                </button>
            </div>

            {/* Popups */}
            {activePopup === "subscribe" && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-xl max-w-sm w-full">
                        <div className="relative">
                            <button
                                className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-full text-sm"
                                onClick={togglePopup}
                            >
                                X
                            </button>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                        <p>Enter your email to stay updated with our services.</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded mt-4 mb-4"
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                            onClick={() => alert("Subscribed!")}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            )}

            {activePopup === "chat" && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-xl max-w-sm w-full">
                        <div className="relative">
                            <button
                                className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-full text-sm"
                                onClick={togglePopup}
                            >
                                X
                            </button>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Chat</h3>
                        <p>Start chatting with our support team!</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                            onClick={() => alert("Chat started!")}
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            )}

            {activePopup === "call" && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-xl max-w-sm w-full">
                        <div className="relative">
                            <button
                                className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-full text-sm"
                                onClick={togglePopup}
                            >
                                X
                            </button>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Call Us</h3>
                        <p>Contact us at:</p>
                        <p className="font-bold text-lg mb-4">+1 234 567 890</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded w-full"
                            onClick={() => window.location.href = "tel:+1234567890"}
                        >
                            Call Now
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
