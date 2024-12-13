import Link from "next/link";
import { useEffect, useState } from "react";

export default function Training() {
    const [isClient, setIsClient] = useState(false);

    // UseEffect to set the client-side flag after component mounts
    useEffect(() => {
        setIsClient(true); // This ensures client-specific logic only runs after the component has mounted
    }, []);

    return (
        <>
            <div className="container-fluid overflow-hidden bg-light py-5">
                <div className="container py-5">
                    <div className="section-title text-center mb-5">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">CHECK OUR TRAINING</h5>
                        </div>
                        <h1 className="display-5 mb-4">Get the Best Coaching Service Training with Our Travisa</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam
                            cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
                        </p>
                    </div>

                    <div className="row g-4 training">
                        {isClient && (
                            <>
                                <div className="col-lg-6 col-xl-3">
                                    <div className="training-item">
                                        <div className="training-inner">
                                            <img src="img/training-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="training-title-name">
                                                <Link href="#" className="h4 text-white mb-0">
                                                    IELTS
                                                </Link>
                                                <Link href="#" className="h4 text-white mb-0">
                                                    Coaching
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="training-content bg-secondary rounded-bottom p-4">
                                            <Link href="#">
                                                <h4 className="text-white">IELTS Coaching</h4>
                                            </Link>
                                            <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                            <Link className="btn btn-secondary rounded-pill text-white p-0" href="#">
                                                Read More <i className="me-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-3">
                                    <div className="training-item">
                                        <div className="training-inner">
                                            <img src="img/training-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="training-title-name">
                                                <Link href="#" className="h4 text-white mb-0">
                                                    TOEFL
                                                </Link>
                                                <Link href="#" className="h4 text-white mb-0">
                                                    Coaching
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="training-content bg-secondary rounded-bottom p-4">
                                            <Link href="#">
                                                <h4 className="text-white">TOEFL Coaching</h4>
                                            </Link>
                                            <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                            <Link className="btn btn-secondary rounded-pill text-white p-0" href="#">
                                                Read More <i className="me-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-3">
                                    <div className="training-item">
                                        <div className="training-inner">
                                            <img src="img/training-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="training-title-name">
                                                <Link href="#" className="h4 text-white mb-0">
                                                    PTE
                                                </Link>
                                                <Link href="#" className="h4 text-white mb-0">
                                                    Coaching
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="training-content bg-secondary rounded-bottom p-4">
                                            <Link href="#">
                                                <h4 className="text-white">PTE Coaching</h4>
                                            </Link>
                                            <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                            <Link className="btn btn-secondary rounded-pill text-white p-0" href="#">
                                                Read More <i className="me-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-3">
                                    <div className="training-item">
                                        <div className="training-inner">
                                            <img src="img/training-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="training-title-name">
                                                <Link href="#" className="h4 text-white mb-0">
                                                    OET
                                                </Link>
                                                <Link href="#" className="h4 text-white mb-0">
                                                    Coaching
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="training-content bg-secondary rounded-bottom p-4">
                                            <Link href="#">
                                                <h4 className="text-white">OET Coaching</h4>
                                            </Link>
                                            <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                            <Link className="btn btn-secondary rounded-pill text-white p-0" href="#">
                                                Read More <i className="me-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="col-12 text-center">
                            <Link className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">
                                View More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
