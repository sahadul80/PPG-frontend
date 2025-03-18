"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/components/loading";

interface DashboardDataItem {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    communicationMedium: string;
    reason: string;
    agreeToPolicies: boolean;
}

export default function ContactRequests() {
    const [dashboardData, setDashboardData] = useState<DashboardDataItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/contactRequest", { method: "GET" });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }

                const responseText = await response.text();
                const data = JSON.parse(responseText);

                if (!Array.isArray(data) || data.length < 2 || !Array.isArray(data[0])) {
                    setError("Unexpected API response format.");
                    setDashboardData([]);
                    return;
                }

                const rows = data.slice(1);

                setDashboardData(
                    rows
                        .map((row) => ({
                            firstName: row[0]?.trim() ?? "N/A",
                            lastName: row[1]?.trim() ?? "N/A",
                            company: row[2]?.trim() ?? "N/A",
                            email: row[3]?.trim() ?? "N/A",
                            phone: row[4]?.trim() ?? "N/A",
                            communicationMedium: row[5]?.trim() ?? "N/A",
                            reason: row[6]?.trim() ?? "N/A",
                            agreeToPolicies: row[7]?.trim().toLowerCase() === "true",
                        }))
                        .reverse()
                );
            } catch (error) {
                console.error("Fetch error:", error);
                setError("There was an error fetching the contact requests.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const formatPhoneNumber = (phone: string) => {
        return phone.replace(/\D/g, "");
    };

    const getContactLink = (item: DashboardDataItem) => {
        const formattedPhone = formatPhoneNumber(item.phone);

        if (item.communicationMedium === "Email") {
            return `mailto:${item.email}`;
        } else if (item.communicationMedium === "Phone") {
            return `tel:${formattedPhone}`; // Corrected the issue here
        } else if (item.communicationMedium === "WhatsApp") {
            // WhatsApp requires phone number in international format
            return `https://wa.me/${formattedPhone}?text=Hello,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20your%20service.`;
        } else {
            return "#"; // fallback
        }
    };

    if (isLoading) return <Loading />;

    const filteredData = dashboardData.filter((item) =>
        Object.values(item).some((value) => String(value).toLowerCase().includes(searchTerm))
    );

    return (
        <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Contact Requests</h2>

            {error && (
                <div className="bg-red-100 text-red-800 p-4 rounded mb-4">{error}</div>
            )}

            <input
                type="text"
                className="mb-4 p-2 w-full sm:w-1/2 border border-gray-300 rounded"
                placeholder="Search..."
                onChange={handleSearchChange}
                value={searchTerm}
            />

            {/* Mobile View */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-sm rounded-lg">
                {filteredData.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-lg flex flex-col space-y-4 bg-white hover:transform hover:translate-x-[-8px] hover:translate-y-[-8px]">
                        <p>Hello, I am <strong>{item.firstName} {item.lastName}</strong>.</p>
                        <p>I am currently in <strong>{item.company}</strong>.</p>
                        <p>I want <strong>{item.reason}</strong> service from your agency.</p>
                        <div className="flex flex-col space-y-2">
                            <p>You can contact me over <strong>{item.communicationMedium}</strong></p>
                            <a
                                href={getContactLink(item)}
                                className="w-full py-2 px-2 text-center rounded-lg hover:bg-gray-600 transition-colors border-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Let's Talk</strong>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
