"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TransitionLink } from "./TransitionLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("home");
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (pathname === "/") {
            setActiveLink("home");
        } else if (pathname.startsWith("/pages/about")) {
            setActiveLink("why-us");
        } else if (pathname.startsWith("/pages/services")) {
            setActiveLink("services");
        } else if (pathname.startsWith("/pages/branches")) {
            setActiveLink("branches");
        } else if (pathname.startsWith("/pages/blogs&news")) {
            setActiveLink("blogs-&-news");
        } else if (pathname.startsWith("/pages/events")) {
            setActiveLink("events");
        } else {
            setActiveLink("");
        }
    }, [pathname]);

    const handleLinkClick = (link: string): void => {
        setActiveLink(link);
    };

    const handleMouseEnter = (key: string) => {
        setDropdownOpen(key);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(null);
    };

    const dropdownItems = {
        "why-us": [
            { name: "Who We Are", href: "/pages/about/who-we-are" },
            { name: "Message from CCO", href: "/pages/about/cco-message" },
            { name: "Message from CEO", href: "/pages/about/ceo-message" },
            { name: "Message from Chairman", href: "/pages/about/chairman-message" },
            { name: "Job Opportunities", href: "/pages/about/job-opportunities" },
            { name: "Achievements", href: "/pages/about/achievements" },
            { name: "Professional Recognition", href: "/pages/about/recognition" },
            { name: "Testimonials", href: "/pages/about/testimonials" },
        ],
        "services": [
            { name: "Visa Categories", href: "/pages/services/visa-categories" },
            { name: "Student Admission", href: "/pages/services/student-admission" },
            { name: "Student Accommodation", href: "/pages/services/student-accommodation" },
            { name: "Partner University", href: "/pages/services/partner-university" },
            { name: "School/College & Private Institutions", href: "/pages/services/schools-colleges-private-institutions" },
            { name: "Government & Private Companies", href: "/pages/services/gov-private-companies" },
            { name: "Advice for Parents", href: "/pages/services/advice-parents" },
            { name: "End-to-End Services", href: "/pages/services/end-to-end" },
        ],
        "branches": [
            { name: "UK Head Office", href: "/pages/branches/uk-office" },
            { name: "Global Branches", href: "/pages/branches/global" },
        ],
        "events": [
            { name: "Education Expo", href: "/pages/events/expo" },
            { name: "Education Fair", href: "/pages/events/fair" },
            { name: "Open Days", href: "/pages/events/open-days" },
            { name: "Assessment Day", href: "/pages/events/assessment" },
            { name: "Album", href: "/pages/events/album" },
            { name: "Campus Visits", href: "/pages/events/campus-visits" },
            { name: "Seminars", href: "/pages/events/seminars" },
            { name: "School Visits", href: "/pages/events/school-visits" },
        ],
        "blogs-&-news": [
            { name: "Blogs", href: "/pages/blogs&news/blogs" },
            { name: "News", href: "/pages/blogs&news/news" },
        ],
    };

    return (
        <div className="bg-white px-4 lg:px-5 py-3 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between">
                <TransitionLink
                    href="/"
                    onClick={() => handleLinkClick("home")}
                    className="flex items-center border-b border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                    <h1 className="text-2xl font-bold tracking-tighter">people</h1>
                    <Image
                        src="/img/ppg_logo.png"
                        alt="Brand Logo"
                        width={30}
                        height={30}
                    />
                    <h1 className="text-2xl font-bold tracking-tighter">pulse</h1>
                </TransitionLink>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex items-center justify-center rounded-full focus:outline-none p-3 text-gray-600"
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
                        className={`nav-link p-3 font-bold ${activeLink === "home"
                            ? "text-sky-600 border-b-2 border-sky-600"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        home
                    </TransitionLink>
                    {Object.keys(dropdownItems).map((key) => (
                        <div
                            key={key}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setDropdownOpen(dropdownOpen === key ? null : key);
                                }}
                                className={`nav-link p-4 font-bold ${activeLink === key
                                    ? "text-sky-600 border-b-2 border-sky-600"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {key.replace(/-/g, " ")}
                            </Link>
                            {dropdownOpen === key && (
                                <div className="absolute left-0 bg-white shadow-md rounded z-10 w-48 sm:w-56 sm:mt-1">
                                    {dropdownItems[key as keyof typeof dropdownItems].map((item) => (
                                        <TransitionLink
                                            key={item.name}
                                            href={item.href}
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            {item.name}
                                            <hr />
                                        </TransitionLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
}
