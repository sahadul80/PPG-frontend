import Link from "next/link";
import { useState, useEffect } from "react";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHydrated, setIsHydrated] = useState(false); // Ensure hydration

    const images = [
        {
            src: "/img/carousel-1.jpg",
            alt: "Image 1",
            title: "Solution For All Type Of Visas",
            subtitle: "Immigration Process Starts Here!",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            src: "/img/carousel-2.jpg",
            alt: "Image 2",
            title: "Solution For All Type Of Visas",
            subtitle: "Best Visa Immigration Services",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ];

    useEffect(() => {
        setIsHydrated(true); // Ensure hydration before animations start
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Automatically move to the next slide every 5 seconds
    useEffect(() => {
        if (isHydrated) {
            const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
            return () => clearInterval(interval); // Cleanup the interval on component unmount
        }
    }, [isHydrated]);

    return (
        <div
            className="carousel-container"
            style={{
                width: "100%", // Smaller window size
                height: "400px", // Fixed height for the carousel
                overflow: "hidden",
                position: "relative",
                margin: "0 auto", // Center the carousel
            }}
        >
            <div id="carouselId" className="carousel" style={{ height: "100%" }}>
                {/* Carousel Inner */}
                <div
                    className="carousel-inner"
                    style={{
                        display: "flex",
                        height: "100%",
                        transition: "transform 1s ease-in-out",
                        transform: `translateX(-${currentIndex * 100}%)`, // Horizontal sliding effect
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            style={{
                                flex: "0 0 100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={image.src}
                                className="img-fluid"
                                alt={image.alt}
                                style={{
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                    width: "100%", // Make sure the image fits in the container
                                }}
                            />
                            <div className="carousel-caption">
                                <div className="text-center p-4" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-white text-uppercase">{image.title}</h4>
                                    <h1 className="display-2 text-capitalize text-white">{image.subtitle}</h1>
                                    <p className="text-white">{image.description}</p>
                                    <Link
                                        href="#"
                                        className="btn btn-primary border-secondary rounded-pill py-3 px-5"
                                    >
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={prevSlide}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        zIndex: 10,
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "50%",
                    }}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    onClick={nextSlide}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        zIndex: 10,
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "50%",
                    }}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
