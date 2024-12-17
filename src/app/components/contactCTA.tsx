"use client"
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CookieConsentWithChat from "./CookieConsentWithChat";
import ContactOffice from "./contactOffice";

export default function ContactCTA() {
    const [activePopup, setActivePopup] = useState<string | null>(null); // null, "subscribe", "chat", or "call"

    const togglePopup = (popupType: string | null) => {
        setActivePopup(activePopup === popupType ? null : popupType);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [data, setData] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");

        if (!isValidEmail(data.email)) {
            setLoading(false);
            setError("Please enter a valid email address.");
            toast.error("Invalid email address.");
            return;
        }

        try {
            const response = await fetch("/api/subscribers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: data.email }),
            });

            if (response.ok) {
                setMessage("You have successfully subscribed!");
                setData({ email: "" });
                toast.success("You have successfully subscribed!");
            } else {
                const result = await response.json();
                setError(result.message || "Failed to subscribe.");
                toast.error(result.message || "Failed to subscribe.");
            }
        } catch (err) {
            setError("Failed to connect to the server. Please try again.");
            toast.error("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-2 right-20 flex justify-between gap-10 p-4 bg-transparent rounded-full z-50">
            <Toaster />

            {/* Call Button */}
            <div className="contact-method call">
                <button
                    className="flex items-center gap-2 text-white px-4 py-4 rounded-full"
                    onClick={() => togglePopup("call")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                    </svg>
                </button>
            </div>

            {/* Form Button */}
            <div className="contact-method form">
                <button
                    aria-label="Subscribe Button"
                    className="flex items-center gap-2 text-white px-4 py-4 rounded-full"
                    onClick={() => togglePopup("subscribe")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </button>
            </div>

            {/* Chat Button */}
            <div className="contact-method chat">
                <button
                    aria-label="Button to open chat settings"
                    className="flex items-center gap-2 text-white px-4 py-4 rounded-full"
                    onClick={() => togglePopup("chat")}
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 60 60"
                        className="w-5 h-5"
                    >
                        <path d="M57.348,0.793H12.652C11.189,0.793,10,1.983,10,3.446v7.347h34.348c2.565,0,4.652,2.087,4.652,4.653v25.347h1.586   L60,50.207V3.446C60,1.983,58.811,0.793,57.348,0.793z" />
                        <path d="M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446   C47,13.983,45.811,12.793,44.348,12.793z" />
                    </svg>
                </button>
            </div>

            {/* Popup Sections */}
            {activePopup === "subscribe" && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-xl max-w-sm w-full">
                        <div className="relative p-2">
                            <button
                                className="absolute top-1 right-1 bg-black text-white px-2 py-1 rounded-full text-sm"
                                onClick={() => togglePopup(null)}
                            >
                                X
                            </button>
                        </div>
                        <h3>Subscribe</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded mt-4 mb-4"
                                value={data.email}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 rounded"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Subscribe"}
                            </button>
                        </form>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
                    </div>
                </div>
            )}

            {activePopup === "chat" && (
                <div className="fixed bottom-20 right-10 bg-transparent rounded">
                    <div className="bg-white p-5 rounded-lg shadow-xl max-w-sm w-full">
                        <div className="relative p-2">
                            <button
                                className="absolute top-1 right-1 bg-black text-white px-2 py-1 rounded-full text-sm"
                                onClick={() => togglePopup(null)}
                            >
                                X
                            </button>
                        </div>
                        <h3>PulseBot</h3>
                        <CookieConsentWithChat />
                    </div>
                </div>
            )}

            {activePopup === "call" && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-xl max-w-sm w-full">
                        <div className="relative p-2">
                            <button
                                className="absolute top-1 right-1 bg-black text-white px-2 py-1 rounded-full text-sm"
                                onClick={() => togglePopup(null)}
                            >
                                X
                            </button>
                        </div>
                        <ContactOffice />
                    </div>
                </div>
            )}
        </div>
    );
}
