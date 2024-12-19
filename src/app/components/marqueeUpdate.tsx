import Marquee from "./marquee";


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
            <h1 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                margin: "0 auto",
                position: "absolute",
                top: "75%",
            }}
            >
                Our Academic Partners
            </h1>

            < Marquee items={items} duration={20} />;
        </>
    ); 
};

export default MarqueeUpdate;