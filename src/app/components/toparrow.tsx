"use client"
import { useState, useEffect } from "react";

export default function TopArrow() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button if the user scrolls down, hide it when at the top
        setIsVisible(window.scrollY > 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enables smooth scroll animation
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`${isVisible ? " d-block" : "d-none"}`}>
            <button
                onClick={scrollToTop}
                className="bg-transparent rounded-full back-to-top"
            >
                <div className="p-3">
                    <i className="text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            style={{
                                width: "24px",
                                height: "24px",
                                fill: "#fff",
                            }}
                        >
                            <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
                        </svg>
                    </i>
                </div>
            </button>
        </div>
    );
}
