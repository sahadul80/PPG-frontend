import { useState, useEffect } from "react";

export default function Testimonial() {
    const testimonials = [
        {
            img: "img/testimonial-1.jpg",
            name: "John Doe",
            profession: "Software Engineer",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 5,
        },
        {
            img: "img/testimonial-2.jpg",
            name: "Jane Smith",
            profession: "Designer",
            review:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rating: 4,
        },
        {
            img: "img/testimonial-3.jpg",
            name: "Mark Wilson",
            profession: "Marketing Specialist",
            review:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Change testimonial every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
    };

    const renderStars = (rating: number) => {
        return (
            <>
                {Array.from({ length: rating }).map((_, index) => (
                    <span key={index} className="star-filled">&#9733;</span>
                ))}
                {Array.from({ length: 5 - rating }).map((_, index) => (
                    <span key={index} className="star-empty">&#9734;</span>
                ))}
            </>
        );
    };

    return (
        <div className="container-fluid testimonial overflow-hidden pb-5" style={{ position: "relative", background: "#f7f7f7" }}>
            <div className="container py-5">
                <div className="section-title text-center mb-5 fade-in">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">OUR CLIENT REVIEWS</h5>
                    </div>
                    <h1 className="display-5 mb-4">What Our Clients Say</h1>
                    <p className="mb-0">
                        See what our customers think of our services. Their feedback helps us improve and grow.
                    </p>
                </div>

                <div className="carousel-container" style={{ position: "relative", overflow: "hidden" }}>
                    <div
                        className="carousel"
                        style={{
                            display: "flex",
                            transition: "transform 0.5s ease-in-out",
                            transform: `translateX(-${currentIndex * 50}%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: "0 0 50%",
                                    padding: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div className="testimonial-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div className="testimonial-content p-4 mb-5" style={{
                                        background: "#fff", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", borderRadius: "10px", textAlign: "center"
                                    }}>
                                        <p className="fs-5 mb-0">{testimonial.review}</p>
                                        <div className="d-flex justify-content-end">
                                            <span className="stars" style={{ fontSize: "1.5rem", color: "gold" }}>{renderStars(testimonial.rating)}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div
                                            className="rounded-circle me-4"
                                            style={{ width: "100px", height: "100px", overflow: "hidden" }}
                                        >
                                            <img
                                                className="img-fluid rounded-circle"
                                                src={testimonial.img}
                                                alt="Client"
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="my-auto">
                                            <h5>{testimonial.name}</h5>
                                            <p className="mb-0">{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-center mt-4">
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={handlePrev}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
