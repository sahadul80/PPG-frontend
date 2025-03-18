"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface VisaCategory {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function Service() {
    const [visaCategories, setVisaCategories] = useState<VisaCategory[]>([]);
    const [visibleCount, setVisibleCount] = useState(3); // Initial number of categories to show
    const itemsPerPage = 3; // Number of categories to add when "View More" is clicked

    useEffect(() => {
        const fetchVisas = async () => {
            try {
                const response = await fetch("/visaCategory/visaCategories.json"); // Adjust the path if necessary
                const data: VisaCategory[] = await response.json();
                setVisaCategories(data);
            } catch (error) {
                console.error("Failed to fetch visa categories:", error);
            }
        };

        fetchVisas();
    }, []);

    const handleViewMore = () => {
        const newVisibleCount = visibleCount + itemsPerPage;
        if (newVisibleCount <= visaCategories.length) {
            setVisibleCount(newVisibleCount);
        } else {
            setVisibleCount(visaCategories.length);
        }
    };

    const handleViewLess = () => {
        const newVisibleCount = visibleCount - itemsPerPage;
        if (newVisibleCount >= 3) {
            setVisibleCount(newVisibleCount);
        } else {
            setVisibleCount(3); // Reset to the initial number of visible categories
        }
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-800 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                            VISA CATEGORIES
                        </h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                            We offer Student, worker, job, travel, and immigrant visas.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {visaCategories.slice(0, visibleCount).map((category) => (
                        <div key={category.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt={category.title}
                                    className="object-cover object-center h-full w-full"
                                    src={category.image}
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">
                                {category.title}
                            </h2>
                            <p className="text-base leading-relaxed mt-2">{category.description}</p>
                            <a className="inline-flex items-center mt-3" href="#">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {visibleCount > 3 && (
                        <button
                            className="py-2 px-6 rounded mr-4"
                            onClick={handleViewLess}
                        >
                            View Less
                        </button>
                    )}
                    {visibleCount < visaCategories.length && (
                        <button
                            className="py-2 px-6 rounded"
                            onClick={handleViewMore}
                        >
                            More Categories
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
