"use client"
import Marquee from "./marquee";
import Image from "next/image";

const items = [
    { src: "/img/academic_partners/aiub_logo.png", alt: "AIUB" },
    { src: "/img/academic_partners/bracu_logo.png", alt: "BracU" },
    { src: "/img/academic_partners/nsu_logo.png", alt: "NSU" },
    { src: "/img/academic_partners/diu_logo.png", alt: "DIU" },
    { src: "/img/academic_partners/ewu_logo.png", alt: "EWU" },
    { src: "/img/academic_partners/aust_logo.png", alt: "AUST" },
    { src: "/img/academic_partners/aiub_logo.png", alt: "AIUB" },
    { src: "/img/academic_partners/bracu_logo.png", alt: "BracU" },
    { src: "/img/academic_partners/nsu_logo.png", alt: "NSU" },
    { src: "/img/academic_partners/diu_logo.png", alt: "DIU" },
    { src: "/img/academic_partners/ewu_logo.png", alt: "EWU" },
    { src: "/img/academic_partners/aust_logo.png", alt: "AUST" },
    { src: "/img/academic_partners/aiub_logo.png", alt: "AIUB" },
    { src: "/img/academic_partners/bracu_logo.png", alt: "BracU" },
    { src: "/img/academic_partners/nsu_logo.png", alt: "NSU" },
    { src: "/img/academic_partners/diu_logo.png", alt: "DIU" },
    { src: "/img/academic_partners/ewu_logo.png", alt: "EWU" },
];

const MarqueeUpdate = () => {
    return (
        <>
            <h1 className="text-2xl text-center font-bold text-gray-900 mt-8">
                OUR ACADEMIC PARTNERS
            </h1>

            < Marquee items={items} duration={20} />;
        </>
    ); 
};

export default MarqueeUpdate;