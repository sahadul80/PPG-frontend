"use client";
import React, { useEffect, useState } from 'react';
import Loading from './loading';

// Define the type for each menu item
interface MenuItem {
    name: string;
    link: string;
}[];

const Sidebar: React.FC = () => {
    const [menuItem, setMenuItem] = useState<MenuItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const response = await fetch(`/api/sidebar`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }

                const data = await response.json();

                console.log('Fetched data:', data); // Log the fetched data here

                // Check if the fetched data is an object or array
                if (Array.isArray(data)) {
                    setMenuItem(data);
                } else if (data && data.menuItem && Array.isArray(data.menuItem)) {
                    setMenuItem(data.menuItem); // If wrapped inside an 'offices' key
                } else {
                    throw new Error("Fetched data is not in an expected format");
                }

            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItem();
    }, []);

    // Show loading spinner while fetching data
    if (loading) {
        return (
            <Loading />
        );
    }

    // Show error message if there's an error
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Show message if no offices are available
    if (menuItem.length === 0) {
        return <div>No available.</div>;
    }

    return (
        <div className="bg-white px-2">
            <div className="p-2">
                

                {/* Widget 2 */}
                <div className="rounded p-2">
                    <div className="text-center flex justify-center">
                        <a
                            rel="nofollow noopener"
                            href="https://www.britishcouncil.org.bd/en/exam"
                            target="_blank"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/06/25111447/British-Council-IELTS-Sidebar.png"
                                    alt="britishcouncil"
                                    className="max-w-[75%] rounded p-4"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Widget 3 */}
                <div className="rounded px-8">
                    <div className="text-center flex justify-center">
                        <a
                            rel="nofollow noopener"
                            href="https://agent-training.britishcouncil.org/GAL"
                            target="_blank"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/03/20181759/images2.png"
                                    alt="britishcouncil"
                                    className="max-w-[70%] rounded"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Widget 4 */}
                <div className="rounded">
                    <div className="text-center flex justify-center">
                        <a
                            rel="nofollow noopener"
                            href="https://www.trinitycollege.com/"
                            target="_blank"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/07/20152333/Trinity-College-London.png"
                                    alt="Trinity-College"
                                    className="max-w-[75%] rounded"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Widget 5 */}
                <div className="rounded px-4">
                    <div className="text-center flex justify-center">
                        <a
                            rel="nofollow noopener"
                            href="https://pearsonpte.com/"
                            target="_blank"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/03/20181326/image3.png"
                                    alt="Pearson-PTE-Academic"
                                    className="max-w-[60%] rounded"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Widget 6 */}
                <div className="rounded">
                    <div className="flex justify-center">
                        <a
                            rel="nofollow noopener"
                            href="https://www.englishuk.com/"
                            target="_blank"
                            className="px-0"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2022/08/24142716/English-UK%402x.png"
                                    alt="English UK"
                                    className="ml-[40px]"
                                />
                            </div>
                        </a>
                        <a
                            rel="nofollow noopener"
                            href="https://www.icef.com/"
                            target="_blank"
                            className="px-10"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/06/14111530/Untitled-design.png"
                                    alt="ICEF"
                                    className="max-w-[50%] rounded"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Widget 7 */}
                <div className="rounded px-4">
                    <div className="text-center flex justify-center">
                        <a
                            rel="nofollow noopener"
                            href="https://www.ucas.com/"
                            target="_blank"
                        >
                            <div>
                                <img
                                    src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/06/14112618/UCAs.png"
                                    alt="ucas"
                                    className="max-w-[60%] rounded"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
