"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "./loading";
import { TransitionLink } from "./TransitionLink";

interface VisaCategory {
    type: string;
    subtypes: { name: string; image: { path: string; alt: string } }[];
}

export default function VisaCategories() {
    const [visaCategories, setVisaCategories] = useState<VisaCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(3); // Initial number of categories to show
    const itemsPerPage = 3; // Number of categories to add when "View More" is clicked
    const [isNavigating, setIsNavigating] = useState(false); // State for navigation loading
    const router = useRouter();

    useEffect(() => {
        fetchVisaCategories();
    }, []);

    const fetchVisaCategories = async () => {
        try {
            const response = await fetch("/api/visa");
            if (!response.ok) throw new Error("Failed to fetch visa categories.");
            const data = await response.json();
            setVisaCategories(data.visa_categories);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const handleViewMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + itemsPerPage, visaCategories.length));
    };

    const handleViewLess = () => {
        setVisibleCount((prevCount) => Math.max(prevCount - itemsPerPage, 3));
    };

    const handleCategoryClick = async (categoryType: string) => {
        setIsNavigating(true);
        try {
            await router.push(
                `/pages/services/visa-categories/${categoryType
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
            );
        } finally {
            setIsNavigating(false); // Ensure to reset the navigation state
        }
    };

    if (loading || isNavigating) return <Loading />;
    if (error) return <div className="text-center mt-4 text-red-600">{error}</div>;

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
                    {visaCategories.slice(0, visibleCount).map((category, index) => (
                        <div
                            key={index}
                            className="p-4 md:w-1/3 sm:mb-0 mb-6 group cursor-pointer"
                            onClick={() => handleCategoryClick(category.type)}
                        >
                            <div className="rounded-lg h-64 overflow-hidden relative">
                                <Image
                                    alt={category.type}
                                    className="object-cover object-center h-full w-full group-hover:scale-105 transition-transform duration-300"
                                    src={category.subtypes[0]?.image?.path || "/img/default_visa.jpg"}
                                    width={250} // Set a fixed width
                                    height={250} // Set a fixed height
                                />
                            </div>
                            <h3 className="text-lg text-center font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                                {category.type}
                            </h3>
                            <p className="text-center leading-relaxed mt-2">
                                Includes {category.subtypes.length} types of visas.
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {visibleCount > 3 && (
                        <button
                            className="py-2 px-6 rounded mr-4 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                            onClick={handleViewLess}
                        >
                            View Less
                        </button>
                    )}
                    {visibleCount < visaCategories.length && (
                        <button
                            className="py-2 px-6 rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
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
