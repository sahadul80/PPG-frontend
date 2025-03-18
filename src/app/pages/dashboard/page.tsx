"use client";

import { useEffect, useState } from "react";
import Calendar from "../../components/calendar";
import ContactRequests from "../../components/contactRequest";
import Loading from "@/app/components/loading";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [activeLink, setActiveLink] = useState("contactRequest");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchSession = async () => {
            const session = localStorage.getItem("token");
            const sessionUser = localStorage.getItem("username");

            if (!session) {
                router.push("/pages/login");
                return;
            }

            setToken(session);
            setUser(sessionUser);
            setIsLoading(false);
        };

        fetchSession().catch(console.error);
    }, [router]);

    if (isLoading) return <Loading />;

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        router.push("/pages/login");
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar Toggle Button (Mobile) */}
            <button
                className="absolute top-4 left-4 z-20 sm:hidden bg-gray-200 px-3 py-2 rounded shadow-md"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? "✖ Close" : "☰ Menu"}
            </button>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform sm:relative sm:translate-x-0`}>
                <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                </div>
                <nav className="space-y-2 px-6 mt-4">
                    {["contactRequest", "subscribers", "calendar"].map((link) => (
                        <button
                            key={link}
                            onClick={() => {
                                setActiveLink(link);
                                setIsSidebarOpen(false); // Close sidebar on mobile after clicking
                            }}
                            className={`w-full text-left px-4 py-3 rounded transition-all duration-200 ${
                                activeLink === link ? "bg-gray-900 text-white font-medium" : "hover:bg-gray-200"
                            }`}
                        >
                            {link === "contactRequest" && "Contact Requests"}
                            {link === "subscribers" && "Subscribers"}
                            {link === "calendar" && "Calendar"}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-h-screen flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between bg-white shadow px-6 py-4">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Welcome, {user || "Guest"}!</h1>
                    <div className="flex space-x-2 sm:space-x-4">
                        <a href="/settings" className="px-4 py-2 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 rounded">
                            Settings
                        </a>
                        <button onClick={handleLogout} className="px-4 py-2 text-sm sm:text-base bg-red-500 text-white hover:bg-red-600 rounded">
                            Logout
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-4">
                    {activeLink === "contactRequest" && <ContactRequests />}
                    {/* {activeLink === "subscribers" && <Subscriber />} */}
                    {activeLink === "calendar" && <Calendar />}
                </main>
            </div>
        </div>
    );
}
