"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Testimonial from "./components/testimonial";
import Features from "./components/features";
import Facts from "./components/counterfacts";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import ContactCTA from "./components/contactCTA";
import Topbar from "./components/topbar";
import TeamUpdate from "./components/teamUpdate";
import MarqueeUpdate from "./components/marqueeUpdate";
import ContactForm from "./components/contactForm";
import VisaCategories from "./components/visaCategories";
import VideoList from "./components/videos";

// Animate section when it enters the viewport
const SectionWithAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="transition-opacity"
        >
            {children}
        </motion.div>
    );
};

// Lazy load component using Intersection Observer
const LazyLoadComponent = ({ Component }: { Component: React.ElementType }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div ref={ref}>
            {inView ? <Component /> : <div className="p-4 text-center">Loading...</div>}
        </div>
    );
};

// Sticky Topbar when scrolling past Navbar
const StickyTopbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = document.getElementById("navbar")?.offsetHeight;
            if (window.scrollY > (navbarHeight || 0)) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`topbar bg-white w-full p-4 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 shadow-lg z-50" : ""
                }`}
        >
            {/* Topbar content */}
            <div className="flex justify-between items-center">
                <span className="font-bold">My Topbar</span>
            </div>
        </div>
    );
};

// Scroll Shortcut Menu for previously scrolled sections
const ScrollShortcutMenu = () => {
    const [scrolledSections, setScrolledSections] = useState<string[]>([]);
    const [showMenu, setShowMenu] = useState(false);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".scroll-section");
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setScrolledSections((prev) => [...new Set([...prev, section.id])]);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {scrolledSections.length > 0 && (
                <button
                    onClick={() => setShowMenu(!showMenu)}
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
                                    fill: "black",
                                }}
                            >
                                <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
                            </svg>
                        </i>
                    </div>
                </button>
            )}
            {showMenu && (
                <div className="bg-transparent py-20 rounded-lg max-w-xs w-full mt-4">
                    {scrolledSections.map((sectionId) => (
                        <button
                            key={sectionId}
                            onClick={() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })}
                            className="bg-transparent block font-xl font-bold text-gray-600 hover:text-gray-800 text-right ml-auto"
                        >
                            {sectionId}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Home() {
    return (
        <>
            <Topbar />
            <Navbar />

            <SectionWithAnimation>
                <div className="scroll-section" id="About">
                    <Carousel />
                </div>
            </SectionWithAnimation>

            <LazyLoadComponent Component={MarqueeUpdate} />

            <SectionWithAnimation>
                <div className="scroll-section" id="Facts">
                    <Facts />
                </div>
            </SectionWithAnimation>

            <LazyLoadComponent Component={VisaCategories} />

            <SectionWithAnimation>
                <div className="scroll-section" id="Features">
                    <Features />
                </div>
            </SectionWithAnimation>
            <div className="scroll-section" id="Contact-Us">
                <LazyLoadComponent Component={ContactForm} />
            </div>
            <SectionWithAnimation>
                <div className="scroll-section" id="Video-Tutorials">
                    <VideoList />
                </div>
            </SectionWithAnimation>

            <LazyLoadComponent Component={Testimonial} />

            <SectionWithAnimation>
                <div className="scroll-section" id="Our-Team">
                    <TeamUpdate />
                </div>
            </SectionWithAnimation>

            <Footer />
            <Copyright />
            <ScrollShortcutMenu />
            <ContactCTA />
        </>
    );
}