import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
interface SearchItem {
    id: number;
    name: string;
    link: string;
}

export default function Navbar() {
    // State for toggling menu and search visibility
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

    // State for handling search input and results
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

    // Toggle the menu visibility
    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle the search visibility
    const toggleSearch = (): void => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Fetch search results when the search query changes
    useEffect(() => {
        const fetchSearchResults = async (): Promise<void> => {
            if (searchQuery.trim() === "") {
                setSearchResults([]);
                return;
            }

            try {
                const response = await axios.get<SearchItem[]>(`http://localhost:3000/search`, {
                    params: { q: searchQuery },
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setSearchResults([]);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    return (
        <div className="bg-white px-4 lg:px-5 py-3 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/img/brand-logo.png"
                        alt="Brand Logo"
                        width={50}
                        height={50}
                        className="mr-2"
                    />
                    <h1 className="text-2xl font-bold text-secondary">People Pulse</h1>
                </Link>

                {/* Toggler */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden navbar-toggler flex items-center justify-center focus:outline-none"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Menu */}
                <div
                    className={`bg-white lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? "block" : "hidden"
                        } absolute lg:static top-16 left-0 right-0`}
                >
                    {/* Other Links */}
                    <Link href="./about.html" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        About
                    </Link>
                    <Link href="/index" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Service
                    </Link>

                    {/* Dropdown */}
                    <div className="relative group">
                        <Link href="#" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                            Pages
                        </Link>
                        <div className="hidden group-hover:block lg:absolute bg-white shadow-lg py-2 w-48 rounded">
                            <Link href="feature.html" className="dropdown-item">
                                Feature
                            </Link>
                            <Link href="countries.html" className="dropdown-item">
                                Countries
                            </Link>
                            <Link href="testimonial.html" className="dropdown-item">
                                Testimonial
                            </Link>
                            <Link href="training.html" className="dropdown-item">
                                Training
                            </Link>
                            <Link href="404.html" className="dropdown-item">
                                404 Page
                            </Link>
                        </div>
                    </div>

                    <Link href="contact.html" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Contact
                    </Link>

                    {/* Search Field */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-200 px-4 py-2 rounded focus:outline-none group-hover:opacity-100 transition-all duration-500"
                        />
                        <button
                            onClick={toggleSearch}
                            className="btn btn-primary border-secondary rounded-pill"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                style={{ width: '24px', height: '24px' }}
                            >
                                <path d="M11 2a9 9 0 106.32 15.35l4.38 4.38a1 1 0 001.4-1.4l-4.38-4.38A9 9 0 0011 2zm0 2a7 7 0 110 14 7 7 0 010-14z" />
                            </svg>
                        </button>

                        {/* Display Search Results */}
                        {searchResults.length > 0 && (
                            <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded-md">
                                <ul>
                                    {searchResults.map((item) => (
                                        <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                                            <Link href={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link href="#" className="btn btn-primary border-secondary rounded-pill">
                        Get A Quote
                    </Link>
                </div>
            </nav>
        </div>
    );
}
