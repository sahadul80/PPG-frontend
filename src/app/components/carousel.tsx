"use client"
import { useState, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
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

    const moreDetails = () => {
        router.push('/pages/carouselDetails'); // Replace with your folder path
    };

    useEffect(() => {
        setIsHydrated(true); // Ensure hydration before animations start
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Automatically move to the next slide every 4 seconds
    useEffect(() => {
        if (isHydrated) {
            const interval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
            return () => clearInterval(interval); // Cleanup the interval on component unmount
        }
    }, [isHydrated]);

    return (
        <div className="relative">
            <div className="carousel-container relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                {/* Carousel Inner */}
                <div
                    className="carousel-inner flex transition-transform duration-400 ease-in-out w-full h-[50vh] md:h-[60vh]"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="carousel-item w-full flex-shrink-0 relative"
                        >
                            <img
                                src={image.src}
                                className="w-full h-full object-cover"
                                alt={image.alt}
                            />
                            <div className="absolute top-0 left-0 w-full h-[50vh] md:h-[60vh] bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="text-center p-4 space-y-4">
                                    <h4 className="text-white text-uppercase">{image.title}</h4>
                                    <h1 className="text-2xl text-capitalize text-white">{image.subtitle}</h1>
                                    <p className="text-white text-sm">{image.description}</p>
                                    <button
                                        onClick={moreDetails}
                                        className="text-white rounded-full mt-1 px-4 py-2"
                                    >
                                        More Details
                                    </button>
                                </div>
                            </div>
                            {/* Carousel Controls */}
                            <button
                                type="button"
                                onClick={prevSlide}
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl bg-gray-800 bg-opacity-50 rounded-full p-2"
                            >
                                &#8592; {/* Left Arrow */}
                            </button>
                            <button
                                type="button"
                                onClick={nextSlide}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-xl bg-gray-800 bg-opacity-50 rounded-full p-2"
                            >
                                &#8594; {/* Right Arrow */}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
