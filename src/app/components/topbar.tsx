import Link from "next/link";
import { useEffect, useState } from "react";

interface SearchItem {
    id: number;
    name: string;
    email: string;
    description: string;
    link: string;
}

export default function Topbar() {
    const [showInput, setShowInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    useEffect(() => {
        const fetchSearchResults = async (): Promise<void> => {
            if (searchQuery.trim() === "") {
                setSearchResults([]);
                return;
            }

            setIsSearching(true);

            try {
                const response = await fetch(`/api/search?query=${searchQuery}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.results);
                } else {
                    setSearchResults([]);
                }
            } catch (err) {
                console.error("Error fetching search results:", err);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        };

        const debounceFetch = setTimeout(fetchSearchResults, 300);
        return () => clearTimeout(debounceFetch);
    }, [searchQuery]);

    return (
        <div className="container-fluid fixed-top">
            <div className="topbar flex justify-between items-center px-2 py-2">
                {/* Social Icons Section */}
                <div className="topbar-left flex space-x-1">
                    <Link className="btn btn-sm btn-outline-light btn-square rounded-circle" href="">
                        <i className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 462.799"
                                style={{ width: '16px', height: '16px' }}
                            >
                                <path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                            </svg>
                        </i>
                    </Link>
                    <Link className="btn btn-sm btn-outline-light btn-square rounded-circle" href="">
                        <i className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={{ width: '16px', height: '16px' }}
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.68c0 .733.593 1.32 1.325 1.32H12.82V14.725h-3.1v-3.638h3.1V8.414c0-3.067 1.875-4.748 4.616-4.748 1.312 0 2.444.097 2.77.141v3.22l-1.902.001c-1.492 0-1.777.71-1.777 1.745v2.29h3.555l-.463 3.638h-3.092V24h6.066c.733 0 1.325-.588 1.325-1.32V1.326C24 .594 23.21 0 22.675 0z" />
                            </svg>
                        </i>
                    </Link>
                    <Link className="btn btn-sm btn-outline-light btn-square rounded-circle" href="">
                        <i className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={{ width: '16px', height: '16px' }}
                            >
                                <path d="M22.23 0H1.77C.79 0 0 .78 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.47c-1.14 0-2.06-.92-2.06-2.05 0-1.13.92-2.05 2.06-2.05 1.13 0 2.05.92 2.05 2.05-.01 1.13-.92 2.05-2.05 2.05zm15.1 12.98h-3.56v-5.53c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.13 1.43-2.13 2.91v5.64H9.38V9.03h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.56v6.15z" />
                            </svg>
                        </i>
                    </Link>
                    <Link className="btn btn-sm btn-outline-light btn-square rounded-circle" href="">
                        <i className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={{ width: '16px', height: '16px' }}
                            >
                                <path d="M23.498 6.186a3.008 3.008 0 00-2.123-2.123C19.935 3.5 12 3.5 12 3.5s-7.935 0-9.375.563A3.008 3.008 0 00.502 6.186C0 7.626 0 12 0 12s0 4.374.502 5.814a3.008 3.008 0 002.123 2.123C4.065 20.5 12 20.5 12 20.5s7.935 0 9.375-.563a3.008 3.008 0 002.123-2.123C24 16.374 24 12 24 12s0-4.374-.502-5.814zM9.75 15.75v-7.5l6.375 3.75-6.375 3.75z" />
                            </svg>
                        </i>
                    </Link>
                </div>

                <div className="topbar-right flex items-center space-x-1">
                    {/* Search & Login Section */}
                    <div className="relative group flex space-x-1">
                        {/* Search Button */}
                        <button
                            className="z-10 rounded-full"
                            onClick={() => setShowInput(!showInput)} // Toggle input visibility
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                                <path d="M11 2a9 9 0 106.32 15.35l4.38 4.38a1 1 0 001.4-1.4l-4.38-4.38A9 9 0 0011 2zm0 2a7 7 0 110 14 7 7 0 010-14z" />
                            </svg>
                        </button>

                        {/* Search Input Field */}
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`bg-gray-200 px-4 py-1 rounded-full focus:outline-none transition-all text-sm ${showInput ? "opacity-100" : "opacity-0"} `}
                            style={{
                                transition: 'width 0.3s ease, opacity 0.3s ease',
                                width: showInput ? '12rem' : '0',
                                position: 'absolute',
                                right: '0',
                                top: '0',
                            }}
                        />
                        {/* Show Loading Spinner */}
                        {isSearching && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 border-t-2 border-gray-600 border-solid rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Search Results Overlay */}
                        {searchResults.length > 0 && (
                            <div className="absolute top-12 left-0 bg-white shadow-md rounded overlay">
                                <ul>
                                    {searchResults.map((item) => (
                                        <li key={item.id} className="px-4 py-2 rounded">
                                            <Link href={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Login Button */}
                    <Link href="/pages/login" className="btn btn-secondary text-sm px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                            <path d="M159.131,169.721c5.635,58.338,43.367,96.867,96.871,96.867c53.502,0,91.23-38.53,96.867-96.867l7.988-63.029C365.812,44.768,315.281,0,256.002,0c-59.281,0-109.812,44.768-104.86,106.692L159.131,169.721z" />
                            <path d="M463.213,422.569l-3.824-24.35c-3.203-20.417-16.035-38.042-34.475-47.361l-80.473-40.693c-2.519-1.274-4.57-3.194-6.289-5.338c-23.297,24.632-51.6,39.12-82.15,39.12c-30.549,0-58.856-14.488-82.152-39.12c-1.719,2.144-3.77,4.064-6.289,5.338l-80.472,40.693c-18.442,9.319-31.272,26.944-34.475,47.361l-3.826,24.35c-1.363,8.692,0.436,21.448,8.222,27.825C67.42,458.907,105.875,512,256.002,512c150.125,0,188.578-53.093,198.988-61.606C462.779,444.017,464.576,431.261,463.213,422.569z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
