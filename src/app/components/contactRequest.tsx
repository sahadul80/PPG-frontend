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

    if (isLoading) return <Loading />;

    const filteredData = dashboardData.filter((item) =>
        Object.values(item).some((value) => String(value).toLowerCase().includes(searchTerm))
    );

    return (
        <div className="p-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Submissions</h2>

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

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto border border-gray-200 rounded-lg">
                <div className="max-h-[70vh] overflow-y-auto">
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Preference</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Policy Accepted</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-sm text-gray-900">{item.firstName}</td>
                                    <td className="px-4 py-4 text-sm text-gray-900">{item.lastName}</td>
                                    <td className="px-4 py-4 text-sm text-gray-900">{item.company}</td>
                                    <td className="px-4 py-4 text-sm text-blue-600 hover:underline">
                                        <a href={`mailto:${item.email}`}>{item.email}</a>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-900">{item.phone}</td>
                                    <td className="px-4 py-4 text-sm text-gray-900">{item.communicationMedium}</td>
                                    <td className="px-4 py-4 text-sm text-gray-900">{item.reason}</td>
                                    <td className="px-4 py-4 text-sm">
                                        {item.agreeToPolicies ? "✔ Accepted" : "✗ Declined"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile View */}
            <div className="sm:hidden space-y-4">
                {filteredData.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md">
                        <p><strong>Name:</strong> {item.firstName} {item.lastName}</p>
                        <p><strong>Company:</strong> {item.company}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${item.email}`} className="text-blue-600 underline">{item.email}</a></p>
                        <p><strong>Phone:</strong> {item.phone}</p>
                        <p><strong>Preference:</strong> {item.communicationMedium}</p>
                        <p><strong>Reason:</strong> {item.reason}</p>
                        <p><strong>Policy:</strong> {item.agreeToPolicies ? "✔ Accepted" : "✗ Declined"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
