import Link from "next/link";
import React from "react";

export default function ContactCTA() {
    return (
        <div className="fixed bottom-5 right-5 flex items-center gap-4 p-4 bg-transparent rounded-lg py-5 px-20 z-50">
            {/* Call Button */}
            <div className="contact-method call">
                <button className="flex items-center gap-2 text-white px-4 py-4 rounded-full">
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
                    aria-label="Button to open contact form"
                    className="flex items-center gap-2 text-white px-4 py-4 rounded-full"
                    onClick={() => alert("Open Contact Form")}
                >
                    <span className="new-form-image">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: '20px', height: '20px' }}
                        >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                    </span>
                </button>
            </div>

            {/* Chat Button */}
            <div className="contact-method chat">
                <button
                    aria-label="Button to open chat settings"
                    className="flex items-center gap-2 text-white px-4 py-4 rounded-full"
                    onClick={() => alert("Open Chat Settings")}
                >
                    <span className="new-chat-placeholder-image">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 60 60"
                            style={{ width: '20px', height: '20px' }}
                        >
                            <g>
                                <path d="M57.348,0.793H12.652C11.189,0.793,10,1.983,10,3.446v7.347h34.348c2.565,0,4.652,2.087,4.652,4.653v25.347h1.586   L60,50.207V3.446C60,1.983,58.811,0.793,57.348,0.793z" />
                                <path d="M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446   C47,13.983,45.811,12.793,44.348,12.793z M11,22.793h12c0.553,0,1,0.448,1,1s-0.447,1-1,1H11c-0.553,0-1-0.448-1-1   S10.447,22.793,11,22.793z M36,38.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,38.793,36,38.793z    M36,31.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,31.793,36,31.793z" />
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}
