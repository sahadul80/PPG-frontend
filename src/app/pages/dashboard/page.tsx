"use client";

import { useEffect, useState } from "react";
import Calendar from "../../components/calendar";
import ContactRequests from "../../components/contactRequest";
import Loading from "@/app/components/loading";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut } from "lucide-react";
import AllSubs from "../../components/allSubs";

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
            {/* Sidebar - Always Visible on Desktop, Slide-in on Mobile */}
            <div className="hidden sm:block sm:w-64 bg-white shadow-lg min-h-screen">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                </div>
                <nav className="space-y-1 px-4 mt-2 sm:text-sm">
                    {["contactRequest", "subscribers", "calendar"].map((link) => (
                        <button
                            key={link}
                            onClick={() => setActiveLink(link)}
                            className={`w-full text-left px-2 py-2 rounded transition-all duration-200 ${
                                activeLink === link ? "" : "bg-gray-200 text-black"
                            }`}
                        >
                            {link === "contactRequest" && "Contact Requests"}
                            {link === "subscribers" && "Subscribers"}
                            {link === "calendar" && "Calendar"}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.aside
                        initial={{ x: -250 }}
                        animate={{ x: 0 }}
                        exit={{ x: -250 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40 sm:hidden"
                    >
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Dashboard</h2>
                            <button onClick={() => setIsSidebarOpen(false)} className="sm:hidden">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav className="space-y-2 px-6 mt-4">
                            {["contactRequest", "subscribers", "calendar"].map((link) => (
                                <button
                                    key={link}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setIsSidebarOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 rounded transition-all duration-200 ${
                                        activeLink === link ? "" : "bg-gray-200 text-black"
                                    }`}
                                >
                                    {link === "contactRequest" && "Contact Requests"}
                                    {link === "subscribers" && "Subscribers"}
                                    {link === "calendar" && "Calendar"}
                                </button>
                            ))}
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 min-h-screen flex flex-col">
                {/* Header (Fixed on Mobile) */}
                <header className="fixed top-0 left-0 w-full bg-white shadow px-6 py-4 flex items-center justify-between z-30 sm:relative sm:z-0">
                    {/* Sidebar Toggle Button (Mobile) */}
                    <button className="sm:hidden" onClick={() => setIsSidebarOpen(true)}>
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Welcome User */}
                    <h1 className="text-sm sm:text-lg font-semibold text-gray-800 whitespace-nowrap">
                        Welcome, {user || "Guest"}!
                    </h1>

                    {/* Logout Button */}
                    <button onClick={handleLogout} className="px-3 py-1 text-xs sm:text-sm bg-red-500 text-white hover:bg-red-600 rounded flex items-center">
                        <LogOut className="w-4 h-4 mr-1" />
                        Logout
                    </button>
                </header>

                {/* Main Content */}
                <main className="p-4 mt-16 sm:mt-0">
                    {activeLink === "contactRequest" && <ContactRequests />}
                    {activeLink === "subscribers" && <AllSubs />}
                    {activeLink === "calendar" && <Calendar />}
                </main>
            </div>
        </div>
    );
}
