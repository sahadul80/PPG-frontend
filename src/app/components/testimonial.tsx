import { useState, useEffect } from "react";

type Testimonial = {
    img: string;
    name: string;
    profession: string;
    review: string;
    rating: number;
};

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch testimonials from the API
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`/api/testimonials`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Fetched data:", data);  // Log the response data to inspect it

                if (Array.isArray(data)) {
                    setTestimonials(data);  // Directly set if it's an array
                } else if (data.testimonials && Array.isArray(data.testimonials)) {
                    setTestimonials(data.testimonials);  // If data is wrapped in 'testimonials' key
                } else {
                    throw new Error("Fetched data is not in an expected format");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

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

    if (loading) {
        return <div>Loading testimonials...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container-fluid testimonial overflow-hidden flex justify-center pb-5">
            <div className="container py-5">
                <div className="section-title text-center mb-5 fade-in">
                    <div className="sub-style">
                        <h5 className="text-2xl font-bold text-center mb-6">OUR CLIENT REVIEWS</h5>
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
                <div className="flex justify-center mt-4">
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
