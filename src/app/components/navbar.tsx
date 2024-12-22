"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TransitionLink } from "./TransitionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("home");
    const pathname = usePathname();

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (pathname === "/") setActiveLink("home");
        else if (pathname === "/pages/about") setActiveLink("about");
        else if (pathname === "/pages/services") setActiveLink("services");
        else if (pathname === "/pages/achievements") setActiveLink("achievements");
        else if (pathname === "/pages/career") setActiveLink("career");
        else if (pathname === "/pages/events") setActiveLink("events");
    }, [pathname]);

    const handleLinkClick = (link: string): void => {
        setActiveLink(link);
    };

    return (
        <div className="bg-white px-4 lg:px-5 py-3 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between">
                <TransitionLink
                    href="/"
                    onClick={() => handleLinkClick("home")}
                    className="flex items-center border-b border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                    <h1 className="text-3xl font-bold">People</h1>
                    <Image
                        src="/img/ppg_logo.png"
                        alt="Brand Logo"
                        width={30}
                        height={30}
                        className="mr-1 ml-1"
                    />
                    <h1 className="text-3xl font-bold">Pulse</h1>
                </TransitionLink>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex items-center justify-center focus:outline-none p-3 text-gray-500 hover:text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        style={{ width: "20px", height: "20px" }}
                    >
                        <path d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                    </svg>
                </button>

                <div
                    className={`bg-white lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? "block" : "hidden"
                        } absolute lg:static top-16 left-0 right-0 flex-col lg:flex-row border-b border-gray-200`}
                >
                    <TransitionLink
                        href="/"
                        onClick={() => handleLinkClick("home")}
                        className={`nav-link p-3 text-l font-bold ${activeLink === "home"
                                ? "text-sky-600 border-b-2 border-sky-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Home
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/about"
                        onClick={() => handleLinkClick("about")}
                        className={`nav-link p-3 text-l font-bold ${activeLink === "about"
                                ? "text-sky-600 border-b-2 border-sky-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        About
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/services"
                        onClick={() => handleLinkClick("services")}
                        className={`nav-link p-3 text-l font-bold ${activeLink === "services"
                                ? "text-sky-600 border-b-2 border-sky-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Services
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/achievements"
                        onClick={() => handleLinkClick("achievements")}
                        className={`nav-link p-3 text-l font-bold ${activeLink === "achievements"
                                ? "text-sky-600 border-b-2 border-sky-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Achievements
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/career"
                        onClick={() => handleLinkClick("career")}
                        className={`nav-link p-3 text-l font-bold ${activeLink === "career"
                                ? "text-sky-600 border-b-2 border-sky-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Career
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/events"
                        onClick={() => handleLinkClick("events")}
                        className={`nav-link p-3 text-l font-bold ${activeLink === "events"
                                ? "text-sky-600 border-b-2 border-sky-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Events
                    </TransitionLink>
                </div>
            </nav>
        </div>
    );
}
