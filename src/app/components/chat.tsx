import React, { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); // Error state

    // Send message to the backend API
    const sendMessage = async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        // Add the user's message to the chat
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: trimmedInput }]);
        setInput(''); // Clear input field
        setError(null); // Reset error state

        // Indicate that the bot is responding
        setLoading(true);

        try {
            // Make the API request
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmedInput }), // Pass the message as JSON
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            const data = await response.json();
            if (data.reply) {
                // Add bot's reply to the chat
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'bot', text: data.reply },
                ]);
            } else {
                throw new Error('No reply received from the bot');
            }
        } catch (error: unknown) {
            console.error('Error while communicating with API:', error);
            setError('Sorry, something went wrong. Please try again.'); // Set error state

            // Add bot's error message to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' },
            ]);
        } finally {
            setLoading(false); // Hide the loading state once the request is done
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="chat-container">
            <div
                className="chat-box"
                style={{
                    overflowY: 'auto',
                    maxHeight: '400px',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    backgroundColor: '#f9f9f9',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: messages.length === 0 ? 'center' : 'flex-start',
                }}
            >
                {messages.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: '#888' }}>Start a new chat by typing below!</p>
                ) : (
                    messages.map((msg, index) => (
                        <p
                            key={index}
                            className={msg.sender === 'user' ? 'user-message' : 'bot-message'}
                            style={{
                                textAlign: msg.sender === 'user' ? 'right' : 'left',
                                backgroundColor: msg.sender === 'user' ? '#d1e7dd' : '#f8d7da',
                                padding: '8px',
                                borderRadius: '10px',
                                maxWidth: '80%',
                                margin: '5px 0',
                                marginLeft: msg.sender === 'user' ? 'auto' : '0',
                            }}
                        >
                            <strong>{msg.sender === 'user' ? 'You: ' : 'Bot: '}</strong>
                            {msg.text}
                        </p>
                    ))
                )}
                {loading && <p style={{ fontStyle: 'italic', color: '#888' }}>Bot is typing...</p>}
            </div>
            <div className="input-container" style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '16px',
                    }}
                />
                <button
                    onClick={sendMessage}
                    style={{
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
