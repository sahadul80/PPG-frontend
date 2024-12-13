import Link from "next/link";
import { useEffect } from "react";

export default function Service() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.animate-fade-in').forEach(element => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="container-fluid service overflow-hidden pt-5">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 animate-fade-in">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Visa Categories</h5>
                        </div>
                        <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam
                            cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
                        </p>
                    </div>
                    <div className="row g-4">
                        {["Job Visa", "Tourist Visa", "Student Visa"].map((title, index) => (
                            <div className="col-lg-6 col-xl-4" key={index}>
                                <div className="service-item animate-fade-in">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img
                                                src={`img/service-${index + 1}.jpg`}
                                                width="400" // Replace with actual image dimensions
                                                height="300" // Replace with actual image dimensions
                                                className="img-fluid w-100 rounded"
                                                alt={`${title} Image`}
                                            />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <Link href="#" className="h4 text-white mb-0">{title}</Link>
                                                </div>
                                                <Link className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">
                                                    Explore More
                                                </Link>
                                            </div>
                                            <div className="service-content pb-4">
                                                <Link href="#"><h4 className="text-white mb-4 py-3">{title}</h4></Link>
                                                <div className="px-4">
                                                    <p className="mb-4">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.
                                                    </p>
                                                    <Link className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">
                                                        Explore More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
