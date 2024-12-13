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
        <div className="carousel-header" style={{ height: "100vh", overflow: "hidden" }}>
            <div id="carouselId" className="carousel" style={{ height: "100%" }}>
                {/* Indicators */}
                <ol className="carousel-indicators">
                    {images.map((_, index) => (
                        <li
                            key={index}
                            data-bs-target="#carouselId"
                            data-bs-slide-to={index}
                            className={index === currentIndex ? "active" : ""}
                        />
                    ))}
                </ol>

                {/* Carousel Inner */}
                <div className="carousel-inner" role="listbox" style={{ height: "100%" }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                            style={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                opacity: index === currentIndex ? 0 : 1,
                                transition: isHydrated
                                    ? "opacity 1s ease-in-out"
                                    : undefined,
                            }}
                        >
                            <img
                                src={image.src}
                                className="img-fluid"
                                alt={image.alt}
                                style={{ maxHeight: "100%", objectFit: "cover" }}
                            />
                            <div className="carousel-caption">
                                <div className="text-center p-4" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-white text-uppercase">
                                        {image.title}
                                    </h4>
                                    <h1 className="display-2 text-capitalize text-white">
                                        {image.subtitle}
                                    </h1>
                                    <p className="text-white">{image.description}</p>
                                    <Link
                                        href="#"
                                        className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
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
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    onClick={nextSlide}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
