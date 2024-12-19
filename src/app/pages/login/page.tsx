"use client";

import { useState } from "react";
import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const { token } = await response.json(); // Assume API returns a token
                localStorage.setItem("sessionToken", token); // Store token in localStorage
                window.location.href = "/pages/dashboard"; // Redirect to dashboard
            } else {
                const { message } = await response.json();
                setError(message || "Login failed");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    }

    async function handleCreate(e: any) {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            const { message } = await res.json();
            setError(message);
            return;
        }

        window.location.href = "/pages/login";
    }

    return (
        <div>
            <Topbar />
            <Navbar />

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">User Login!</h1>
                </div>

                <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>

                        <div className="relative">
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter username"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            <a className="underline" href="#">Forget Password?</a>
                        </p>

                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="inline-block rounded-lg px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}
