import React, { useState, useEffect } from "react";
import Countries from "./country";

// Define the Country type
interface Country {
    name: string;
    description: string;
    image: string;
    link: string;
}

export default function CountryUpdate() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(4); // Initial number of categories to show
    const itemsPerPage = 4; // Number of categories to add when "View More" is clicked

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`/api/countries`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Fetched data:", data);  // Log the response data to inspect it

                if (Array.isArray(data)) {
                    setCountries(data);  // Directly set if it's an array
                } else if (data.countries && Array.isArray(data.countries)) {
                    setCountries(data.countries);  // If data is wrapped in 'countries' key
                } else {
                    throw new Error("Fetched data is not in an expected format");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleViewMore = () => {
        const newVisibleCount = visibleCount + itemsPerPage;
        if (newVisibleCount <= countries.length) {
            setVisibleCount(newVisibleCount);
        } else {
            setVisibleCount(countries.length);
        }
    };

    const handleViewLess = () => {
        const newVisibleCount = visibleCount - itemsPerPage;
        if (newVisibleCount >= 4) {
            setVisibleCount(newVisibleCount);
        } else {
            setVisibleCount(4); // Reset to the initial number of visible categories
        }
    };

    if (loading) {
        return <div>Loading countries...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="country-section">
            <div className="container mx-auto px-6 py-6">
                <h2 className="text-2xl font-bold text-center mb-6">COUNTRIES WE OFFER</h2>
                    <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <Countries countries={countries.slice(0, visibleCount)} /> {/* Show the visible countries */}
                    </div>
            </div>
            <div className="text-center text-bold text-xl p-6">
                {visibleCount > 4 && (
                    <button
                        className="py-2 px-6 rounded mr-4"
                        onClick={handleViewLess}
                    >
                        View Less
                    </button>
                )}
                {visibleCount < countries.length && (
                    <button
                        className="py-2 px-6 rounded"
                        onClick={handleViewMore}
                    >
                        More Countries
                    </button>
                )}
            </div>
        </div>
    );
}
