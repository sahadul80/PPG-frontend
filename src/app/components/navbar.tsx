"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TransitionLink } from "./TransitionLink";
import { usePathname } from "next/navigation";  // Import usePathname

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("home");  // Default active link is "home"
    const pathname = usePathname();  // Use the usePathname hook

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Update active link based on the current path
    useEffect(() => {
        if (pathname === "/") {
            setActiveLink("home");
        } else if (pathname === "/pages/about") {
            setActiveLink("about");
        } else if (pathname === "/pages/services") {
            setActiveLink("services");
        } else if (pathname === "/pages/achievements") {
            setActiveLink("achievements");
        } else if (pathname === "/pages/career") {
            setActiveLink("career");
        } else if (pathname === "/pages/events") {
            setActiveLink("events");
        }
    }, [pathname]);  // Depend on pathname to update on route change

    // Update active link when a navigation item is clicked
    const handleLinkClick = (link: string): void => {
        setActiveLink(link);
    };

    return (
        <div className="bg-white px-4 lg:px-5 py-3 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between">
                <TransitionLink
                    href="/"
                    onClick={() => handleLinkClick("home")}
                    className="flex items-center py-2 px-4 rounded transition duration-300"
                >
                    <h1 className="text-2xl font-bold normal">People</h1>
                    <Image
                        src="/img/brand-logo.png"
                        alt="Brand Logo"
                        width={30}
                        height={30}
                        className="mr-2"
                    />
                    <h1 className="text-2xl font-bold rnorm">Pulse</h1>
                </TransitionLink>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden navbar-toggler flex items-center justify-center focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        style={{ width: '20px', height: '20px' }}
                    >
                        <path d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                    </svg>
                </button>

                <div
                    className={`bg-white lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? "block" : "hidden"} absolute lg:static top-16 left-0 right-0 flex-col lg:flex-row space-y-4 lg:space-y-0`}
                >
                    <TransitionLink
                        href="/"
                        onClick={() => handleLinkClick("home")}
                        className={`nav-link py-2 px-4 rounded transition duration-300 ${activeLink === "home" ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`}
                    >
                        Home
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/about"
                        onClick={() => handleLinkClick("about")}
                        className={`nav-link py-2 px-4 rounded transition duration-300 ${activeLink === "about" ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`}
                    >
                        About
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/services"
                        onClick={() => handleLinkClick("services")}
                        className={`nav-link py-2 px-4 rounded transition duration-300 ${activeLink === "services" ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`}
                    >
                        Service
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/achievements"
                        onClick={() => handleLinkClick("achievements")}
                        className={`nav-link py-2 px-4 rounded transition duration-300 ${activeLink === "achievements" ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`}
                    >
                        Achievements
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/career"
                        onClick={() => handleLinkClick("career")}
                        className={`nav-link py-2 px-4 rounded transition duration-300 ${activeLink === "career" ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`}
                    >
                        Career
                    </TransitionLink>
                    <TransitionLink
                        href="/pages/events"
                        onClick={() => handleLinkClick("events")}
                        className={`nav-link py-2 px-4 rounded transition duration-300 ${activeLink === "events" ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`}
                    >
                        Events
                    </TransitionLink>
                </div>
            </nav>
        </div>
    );
}
