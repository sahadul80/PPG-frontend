"use client";

import { useEffect, useState, useRef } from "react";
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
    const [viewMode, setViewMode] = useState<"card" | "table">("card");

    const columnRefs = useRef<(HTMLTableCellElement | null)[]>([]);

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
        return phone.replace(/\D/g, "").replace(/^\+/, "00");
    };

    const getContactLink = (item: DashboardDataItem) => {
        const formattedPhone = formatPhoneNumber(item.phone);

        if (item.communicationMedium === "Email") {
            return `mailto:${item.email}`;
        } else if (item.communicationMedium === "Phone") {
            return `tel:${formattedPhone}`;
        } else if (item.communicationMedium === "WhatsApp") {
            return `https://wa.me/${formattedPhone}?text=Hello,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20your%20service.`;
        } else {
            return "#";
        }
    };

    const handleMouseDown = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const startX = e.clientX;
        const startWidth = columnRefs.current[index]?.offsetWidth || 0;

        const handleMouseMove = (event: MouseEvent) => {
            if (columnRefs.current[index]) {
                const newWidth = startWidth + (event.clientX - startX);
                columnRefs.current[index]!.style.width = `${newWidth}px`;
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    if (isLoading) return <Loading />;

    const filteredData = dashboardData.filter((item) =>
        Object.values(item).some((value) => String(value).toLowerCase().includes(searchTerm))
    );

    return (
        <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Contact Requests</h2>

            {error && <div className="bg-red-100 text-red-800 p-4 rounded mb-4">{error}</div>}

            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    className="p-2 w-full sm:w-1/2 border border-gray-300 rounded"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    value={searchTerm}
                />

                <div className="space-x-2">
                    <button
                        onClick={() => setViewMode("card")}
                        className={`px-4 py-2 rounded border ${viewMode === "card" ? "bg-gray-600 text-white" : "text-black"}`}
                    >
                        Card View
                    </button>
                    <button
                        onClick={() => setViewMode("table")}
                        className={`px-4 py-2 rounded border ${viewMode === "table" ? "bg-gray-600 text-white" : "text-black"}`}
                    >
                        Table View
                    </button>
                </div>
            </div>

            {viewMode === "card" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-sm rounded-lg">
                    {filteredData.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-lg bg-white">
                            <p>Hello, I am <strong>{item.firstName} {item.lastName}</strong>.</p>
                            <p>I work at <strong>{item.company}</strong>.</p>
                            <p>I want <strong>{item.reason}</strong> service.</p>
                            <p>You can contact me via <strong>{item.communicationMedium}</strong>.</p>
                            <a
                                href={getContactLink(item)}
                                className="w-full py-2 px-2 text-center rounded-lg hover:bg-gray-600 transition-colors border-2 block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Let's Talk</strong>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                    <div className="max-h-[500px] overflow-auto border border-gray-300">
                        <table className="min-w-full border-collapse">
                            {/* Sticky Header */}
                            <thead className="bg-gray-100 sticky top-0 z-10">
                                <tr className="bg-gray-600 text-white">
                                    {["Name", "Company", "Email", "Phone", "Reason", "Contact"].map((header, index) => (
                                        <th
                                            key={index}
                                            ref={(el) => {
                                                if (el) columnRefs.current[index] = el;
                                            }}
                                            className="border p-2 relative bg-gray-600 text-white"
                                        >
                                            {header}
                                            <div
                                                className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-gray-500"
                                                onMouseDown={(e) => handleMouseDown(index, e)}
                                            ></div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Scrollable Body */}
                            <tbody className="max-h-[600px] overflow-auto">
                                {filteredData.map((item, index) => (
                                    <tr key={index} className="border text-center">
                                        <td className="p-2">{item.firstName} {item.lastName}</td>
                                        <td className="p-2">{item.company}</td>
                                        <td className="p-2">
                                            <a href={`mailto:${item.email}`} className="text-blue-500">{item.email}</a>
                                        </td>
                                        <td className="p-2">
                                            <a href={`tel:${item.phone}`} className="text-blue-500">{item.phone}</a>
                                        </td>
                                        <td className="p-2">{item.reason}</td>
                                        <td className="p-2">
                                            <a href={getContactLink(item)} className="text-blue-500 underline">Contact</a>
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
