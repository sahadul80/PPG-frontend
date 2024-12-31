import { useEffect, useState } from "react";

export default function ContentSection() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track which title is clicked

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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const toggleDescription = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const renderContent = (content: string) => {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        const urlRegex = /\bhttps?:\/\/[^\s]+|www\.[^\s]+\b/g;
        const keywords = ['help and support', 'book an appointment', 'scholarship'].map((kw) =>
            kw.toLowerCase()
        );

        // Process the content to handle keywords, emails, URLs, and newlines
        return content.split('\n').map((line, lineIndex) => (
            <span key={lineIndex}>
                {line.split(/\s+/).map((word, wordIndex) => {
                    const lowerCaseWord = word.toLowerCase();
                    if (emailRegex.test(word)) {
                        return (
                            <a
                                key={wordIndex}
                                href={`mailto:${word}`}
                                className="text-blue-500 underline cursor-pointer"
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
                                className="text-blue-500 underline cursor-pointer"
                            >
                                {word}
                            </a>
                        );
                    } else if (keywords.includes(lowerCaseWord)) {
                        return (
                            <a
                                key={wordIndex}
                                href={`/${word.replace(/\s+/g, '-').toLowerCase()}`}
                                className="text-green-600 underline cursor-pointer"
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
                <h2 className="text-xl font-bold text-center mb-8">
                    {data.title}
                </h2>

                <p className="text-gray-700 mb-4">
                    {data.description}
                </p>

                <div className="space-y-4">
                    {data.services.map((service: any, index: number) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-2 rounded-lg shadow-md"
                        >
                            <h3
                                className="text-l font-semibold mb-4 cursor-pointer"
                                onClick={() => toggleDescription(index)}
                            >
                                {service.title}
                            </h3>
                            {activeIndex === index && (
                                <p className="text-gray-700">
                                    {renderContent(service.description)}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
