"use client";
import { useEffect, useState, useRef } from "react";
import Loading from "./loading";

export default function ContentSection() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [openIndices, setOpenIndices] = useState<number[]>([0]); // First title open by default
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/student-admission');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const toggleDescription = (index: number) => {
        setOpenIndices((prevIndices) => {
            const newIndices = prevIndices.includes(index)
                ? prevIndices.filter((i) => i !== index) // Close the title if open
                : [...prevIndices, index]; // Open the title

            // Scroll to the toggled element
            const element = serviceRefs.current[index];
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }

            return newIndices;
        });
    };

    const renderContent = (content: string) => {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        const urlRegex = /\bhttps?:\/\/[^\s]+|www\.[^\s]+\b/g;
        const keywords = ['help and support', 'book an appointment', 'scholarship'].map((kw) =>
            kw.toLowerCase()
        );

        return content.split('\n').map((line, lineIndex) => (
            <span key={lineIndex}>
                {line.split(/\s+/).map((word, wordIndex) => {
                    const lowerCaseWord = word.toLowerCase();
                    if (emailRegex.test(word)) {
                        return (
                            <a
                                key={wordIndex}
                                href={`mailto:${word}`}
                                className="text-blue-500 underline cursor-pointer break-words"
                            >
                                {word}
                            </a>
                        );
                    } else if (urlRegex.test(word)) {
                        const url = word.startsWith('http') ? word : `http://${word}`;
                        return (
                            <a
                                key={wordIndex}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline cursor-pointer break-words"
                            >
                                {word}
                            </a>
                        );
                    } else if (keywords.includes(lowerCaseWord)) {
                        return (
                            <a
                                key={wordIndex}
                                href={`/${word.replace(/\s+/g, '-').toLowerCase()}`}
                                className="text-green-600 underline cursor-pointer break-words"
                            >
                                {word}
                            </a>
                        );
                    } else {
                        return <span key={wordIndex}>{word} </span>;
                    }
                })}
                <br />
            </span>
        ));
    };

    return (
        <section className="py-6 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">
                    {data.title}
                </h2>

                <p className="text-gray-700 mb-4">
                    {data.description}
                </p>

                <div className="space-y-4">
                    {data.services.map((service: any, index: number) => {
                        const isOpen = openIndices.includes(index);
                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    serviceRefs.current[index] = el;
                                }}
                                className={`p-4 rounded-lg shadow-md transition-all ${isOpen ? 'bg-[#d9eafd]' : 'bg-[#f0f7ff]'
                                    }`}
                            >
                                <h3
                                    className={`text-l font-semibold mb-4 cursor-pointer ${isOpen ? 'text-[#2a6ebd]' : 'text-[#3768a8]'
                                        }`}
                                    onClick={() => toggleDescription(index)}
                                >
                                    {service.title}
                                </h3>
                                {isOpen && (
                                    <p className="text-gray-700 break-words">
                                        {renderContent(service.description)}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
