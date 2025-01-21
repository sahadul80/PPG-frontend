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
import Loading from "./components/loading";
import TopArrow from "./components/toparrow";

// Animate section when it enters the viewport
const SectionWithAnimation = ({ children, id }: { children: React.ReactNode, id: string }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            id={id}
            className="scroll-section"
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
            {inView ? <Component /> : <div className="p-4 text-center"><Loading /></div>}
        </div>
    );
};

// Scroll Shortcut Menu for previously scrolled sections
const ScrollShortcutMenu = () => {
    const [scrolledSections, setScrolledSections] = useState<string[]>([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".scroll-section");
            const visibleSections: string[] = [];

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    visibleSections.push(section.id);
                }
            });

            setScrolledSections((prev) => [...new Set([...prev, ...visibleSections])]);
        };

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
                                style={{ width: "24px", height: "24px", fill: "black" }}
                            >
                                <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
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

            <SectionWithAnimation id="About">
                <Carousel />
            </SectionWithAnimation>

            <LazyLoadComponent Component={MarqueeUpdate} />

            <SectionWithAnimation id="Facts">
                <Facts />
            </SectionWithAnimation>

            <LazyLoadComponent Component={VisaCategories} />

            <SectionWithAnimation id="Features">
                <Features />
            </SectionWithAnimation>

            <div className="scroll-section" id="Contact-Us">
                <LazyLoadComponent Component={ContactForm} />
            </div>

            <SectionWithAnimation id="Video-Tutorials">
                <VideoList />
            </SectionWithAnimation>

            <LazyLoadComponent Component={Testimonial} />

            <SectionWithAnimation id="Our-Team">
                <TeamUpdate />
            </SectionWithAnimation>

            <Footer />
            <Copyright />
            <ScrollShortcutMenu />
            <TopArrow />
            <ContactCTA />
        </>
    );
}
