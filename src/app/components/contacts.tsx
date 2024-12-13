import Link from "next/link";
import { useState, useEffect } from "react";

export default function Contacts() {
    // Prevent rendering on the server side by using a mounted state
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Set to true once the component is mounted on the client
    }, []);

    // Only render the component after it's mounted to prevent hydration mismatch
    if (!isMounted) {
        return null; // Prevent rendering on the server side
    }

    return (
        <div className="container-fluid contact overflow-hidden pb-5">
            <div className="container py-5">
                <div className="office pt-5">
                    <div className="section-title text-center mb-5">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Worldwide Offices</h5>
                        </div>
                        <h1 className="display-5 mb-4">Explore Our Office Worldwide</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
                            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
                            saepe in ab? Repellat!
                        </p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                    <img
                                        src="img/office-2.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Australia office"
                                    />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">Australia</h4>
                                    <Link href="tel:+1234567890" className="text-secondary mb-2">
                                        +123.456.7890
                                    </Link>
                                    <Link href="mailto:travisa@example.com" className="text-muted mb-2">
                                        travisa@example.com
                                    </Link>
                                    <p className="mb-0">
                                        123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United
                                        States of America.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                    <img
                                        src="img/office-1.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Canada office"
                                    />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">Canada</h4>
                                    <Link href="tel:(012)03456789" className="text-secondary mb-2">
                                        (012) 0345 6789
                                    </Link>
                                    <Link href="mailto:travisa@example.com" className="text-muted mb-2">
                                        travisa@example.com
                                    </Link>
                                    <p className="mb-0">
                                        123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United
                                        States of America.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                    <img
                                        src="img/office-3.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="UK office"
                                    />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">United Kingdom</h4>
                                    <Link href="tel:01234567890" className="text-secondary mb-2">
                                        01234.567.890
                                    </Link>
                                    <Link href="mailto:travisa@example.com" className="text-muted mb-2">
                                        travisa@example.com
                                    </Link>
                                    <p className="mb-0">
                                        123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United
                                        States of America.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                    <img
                                        src="img/office-4.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="India office"
                                    />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">India</h4>
                                    <Link href="tel:+1234567890" className="text-secondary mb-2">
                                        +123.45.67890
                                    </Link>
                                    <Link href="mailto:travisa@example.com" className="text-muted mb-2">
                                        travisa@example.com
                                    </Link>
                                    <p className="mb-0">
                                        123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United
                                        States of America.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
