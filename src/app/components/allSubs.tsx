"use client";

import { useEffect, useState, useRef } from "react";
import Loading from "@/app/components/loading";
import CardViewSVG from "./cardViewSVG";
import ListViewSVG from "./ListViewSVG";

interface DashboardDataItem {
    email: string;
}

export default function AllSubs() {
    const [dashboardData, setDashboardData] = useState<DashboardDataItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [viewMode, setViewMode] = useState<"card" | "table">("card");

    const columnRefs = useRef<(HTMLTableCellElement | null)[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/allSubs", { method: "GET" });

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
                            email: row[0]?.trim() ?? "N/A",
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

    const getContactLink = (item: DashboardDataItem) => {
        return `mailto:${item.email}`;
    };

    if (isLoading) return <Loading />;

    const filteredData = dashboardData.filter((item) =>
        Object.values(item).some((value) => String(value).toLowerCase().includes(searchTerm))
    );

    return (
        <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Subscribers</h2>

            {error && <div className="bg-red-100 text-red-800 p-4 rounded mb-4">{error}</div>}

            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    value={searchTerm}
                />
                <div className="w-full sm:w-1/2 flex justify-end rounded-lg">
                    <button
                        onClick={() => setViewMode("card")}
                        className={`px-4 py-2 rounded border ${viewMode === "card" ? "bg-gray-300" : "bg-gray-200"}`}
                    >
                        <CardViewSVG />
                    </button>
                    <button
                        onClick={() => setViewMode("table")}
                        className={`px-4 py-2 rounded border ${viewMode === "table" ? "bg-gray-300" : "bg-gray-200"}`}
                    >
                        <ListViewSVG />
                    </button>
                </div>
            </div>

            {viewMode === "card" ? (
                <div className="p-2 max-h-[500px] overflow-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 text-sm">
                    {filteredData.map((item, index) => (
                        <div key={index} className="office-card border border-gray-200 rounded-lg shadow-lg bg-white p-4 flex flex-col items-center text-center">
                            <p className="mb-2 text-gray-700">
                                Email: <strong>{item.email}</strong>
                            </p>
                            <a
                                href={getContactLink(item)}
                                className="w-full py-1 px-1 text-sm text-center rounded-lg hover:bg-gray-600 transition-colors border-2 block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Send Mail</strong>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-h-[500px] overflow-auto border border-gray-300">
                    <table className="min-w-full text-sm border-collapse">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr className="bg-gray-600 text-white">
                                <th className="border p-2">Email</th>
                            </tr>
                        </thead>
                        <tbody className="max-h-[500px] overflow-auto">
                            {filteredData.map((item, index) => (
                                <tr key={index} className="border text-center">
                                    <td className="p-2">
                                        <a href={`mailto:${item.email}`} className="text-blue-500">{item.email}</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
