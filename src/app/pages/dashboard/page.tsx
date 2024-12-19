"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Calender from "../../components/calender";

export default function Dashboard() {
    const [user, setUser] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchSession() {
            const userName = localStorage.getItem("sessionToken");
            setUser(userName);

            if (!userName) {
                window.location.href = "/pages/login";
                return;
            }
        }

        fetchSession();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    async function handleLogout() {
        try {
            localStorage.removeItem("sessionToken");
            window.location.href = "/pages/login";
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Toaster />
            {/* Right-Side Navigation Panel */}
            <aside className="w-64">
                <div className="p-6">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                </div>
                <nav className="space-y-2 px-6">
                    <a
                        href="/CMS"
                        className="block px-4 py-2 rounded"
                    >
                        CMS
                    </a>
                    <a
                        href="/profile"
                        className="block px-4 py-2 rounded"
                    >
                        Profile
                    </a>
                    <a
                        href="/"
                        className="block px-4 py-2 rounded"
                    >
                        Home
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Top Bar */}
                <header className="flex items-center justify-between bg-white shadow px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800">
                        Welcome, {user ? user : "Guest"}!
                    </h1>
                    <div className="flex space-x-4">
                        <a
                            href="/settings"
                            className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
                        >
                            Settings
                        </a>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                {/* Main Dashboard Content */}
                <main className="p-4">
                    <Calender />
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Dashboard Overview
                    </h2>
                    <p className="text-gray-600">
                        This is your main dashboard content. You can add
                        widgets, charts, and more here!
                    </p>
                </main>
            </div>
        </div>
    );
}
