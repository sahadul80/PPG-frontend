import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="bg-white px-4 lg:px-5 py-3 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between">
                <a href="/" className="flex items-center normal">
                    <h1 className="text-2xl font-bold normal">People</h1>
                    <Image
                        src="/img/brand-logo.png"
                        alt="Brand Logo"
                        width={30}
                        height={30}
                        className="mr-2"
                    />
                    <h1 className="text-2xl font-bold rnorm">Pulse</h1>
                </a>

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
                    className={`bg-white lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? "block" : "hidden"} absolute lg:static top-16 left-0 right-0`}
                >
                    <Link href="/" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Home
                    </Link>
                    <Link href="/pages/about" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        About
                    </Link>
                    <Link href="/study" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Study
                    </Link>
                    <div className="relative group">
                        <Link
                            href="/pages/services"
                            className="nav-link block px-4 py-2 lg:inline lg:px-0"
                        >
                            Service
                        </Link>
                        <div className="hidden group-hover:block lg:absolute bg-white shadow-lg py-2 w-48 rounded">
                            <Link href="/service/admission" className="block px-4 py-2">
                                Admission
                            </Link>
                            <Link href="/service/accomodation" className="block px-4 py-2">
                                Accommodation
                            </Link>
                            <Link href="/service/partners" className="block px-4 py-2">
                                Partners
                            </Link>
                            <Link href="/service/visit-visa" className="block px-4 py-2">
                                Visit Visa
                            </Link>
                            <Link href="/service/residential-visa" className="block px-4 py-2">
                                Residential Visa
                            </Link>
                        </div>
                    </div>

                    <Link href="/career" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Career
                    </Link>
                    <Link href="/achievement" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Achievement
                    </Link>
                    <Link href="/branches" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Branches
                    </Link>
                    <Link href="/events" className="nav-link block px-4 py-2 lg:inline lg:px-0">
                        Events
                    </Link>
                </div>
            </nav>
        </div>
    );
}
