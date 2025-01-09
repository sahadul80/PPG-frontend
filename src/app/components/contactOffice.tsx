"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
type Office = {
    branch: string;
    name: string;
    phone: string;
};

export default function ContactOffice() {
    const [offices, setOffices] = useState<Office[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchOffices = async () => {
            try {
                const response = await fetch(`/api/offices`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }

                const data = await response.json();

                console.log('Fetched data:', data); // Log the fetched data here

                // Check if the fetched data is an object or array
                if (Array.isArray(data)) {
                    setOffices(data);
                } else if (data && data.offices && Array.isArray(data.offices)) {
                    setOffices(data.offices); // If wrapped inside an 'offices' key
                } else {
                    throw new Error("Fetched data is not in an expected format");
                }

            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchOffices();
    }, []);

    // Show loading spinner while fetching data
    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    // Show error message if there's an error
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Show message if no offices are available
    if (offices.length === 0) {
        return <div>No offices available.</div>;
    }

    // Render offices data if available
    return (
        <div className="contact-container">
            <h2 className="p-2">Contact Our Offices</h2>
            {offices.map((office) => (
                <div key={office.branch} className="flex justify-between office-card">
                    <h3 className="font-bold">{office.branch}</h3>
                    <p>{office.name}</p>
                    <a href={`tel:${office.phone}`} className="text-white px-4 py-2 rounded bg-gray-500 hover:bg-gray-600">
                        Call
                    </a>
                </div>
            ))}
        </div>
    );
}
