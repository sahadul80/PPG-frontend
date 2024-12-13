import Link from "next/link"; // for Next.js Link component
import { useEffect, useState } from "react";

export default function Country() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <div className="container-fluid overflow-hidden py-5">
                <div className="container">
                    <div
                        className="section-title text-center"
                        style={{
                            marginBottom: "70px",
                        }}
                    >
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                        </div>
                        <h1 className="display-5 mb-4">Immigration &amp; visa services following Countries</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
                        </p>
                    </div>
                    <div className="row g-4 country text-center">
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="/img/country-1.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Brazil Immigration"
                                    />
                                </div>
                                <div className="country-flag">
                                    <img
                                        src="/img/brazil.jpg"
                                        className="img-fluid rounded-circle"
                                        alt="Flag of Brazil"
                                    />
                                </div>
                                <div className="country-name">
                                    <Link href="/brazil" className="text-white">
                                        Brazil
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="/img/country-2.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="India Immigration"
                                    />
                                </div>
                                <div className="country-flag">
                                    <img
                                        src="/img/india.jpg"
                                        className="img-fluid rounded-circle"
                                        alt="Flag of India"
                                    />
                                </div>
                                <div className="country-name">
                                    <Link href="/india" className="text-white">
                                        India
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="/img/country-3.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="USA Immigration"
                                    />
                                </div>
                                <div className="country-flag">
                                    <img
                                        src="/img/usa.jpg"
                                        className="img-fluid rounded-circle"
                                        alt="Flag of USA"
                                    />
                                </div>
                                <div className="country-name">
                                    <Link href="/usa" className="text-white">
                                        New York
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="/img/country-4.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Italy Immigration"
                                    />
                                </div>
                                <div className="country-flag">
                                    <img
                                        src="/img/italy.jpg"
                                        className="img-fluid rounded-circle"
                                        alt="Flag of Italy"
                                    />
                                </div>
                                <div className="country-name">
                                    <Link href="/italy" className="text-white">
                                        Italy
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <Link href="/countries" className="btn btn-primary border-secondary rounded-pill py-3 px-5">
                                More Countries
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
