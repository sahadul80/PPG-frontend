import { useEffect, useState } from "react";

export default function About() {
    const [isVisibleLeft, setIsVisibleLeft] = useState(false);
    const [isVisibleRight, setIsVisibleRight] = useState(false);
    const [isVisiblePhone, setIsVisiblePhone] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensures the component is mounted
    }, []);

    const handleScroll = () => {
        if (typeof window === "undefined") return; // Only run in browser

        const leftElement = document.querySelector(".fadeInLeft");
        const rightElement = document.querySelector(".fadeInRight");
        const phoneElement = document.querySelector("#phone-tada");

        if (leftElement && leftElement.getBoundingClientRect().top <= window.innerHeight) {
            setIsVisibleLeft(true);
        }

        if (rightElement && rightElement.getBoundingClientRect().top <= window.innerHeight) {
            setIsVisibleRight(true);
        }

        if (phoneElement && phoneElement.getBoundingClientRect().top <= window.innerHeight) {
            setIsVisiblePhone(true);
        }
    };

    useEffect(() => {
        if (isMounted) {
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // Trigger the function on load

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isMounted]);

    return (
        <>
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div
                        className="col-xl-5 fadeInLeft"
                        style={{
                            visibility: isVisibleLeft ? "visible" : "hidden",
                            opacity: isVisibleLeft ? 1 : 0,
                            transform: isVisibleLeft ? "translateX(0)" : "translateX(-50px)",
                            transition: "all 1.5s ease-out",
                            overflow: "hidden",
                        }}
                    >
                        <div className="bg-light rounded">
                            <img
                                src="img/about-2.png"
                                className="img-fluid w-100"
                                style={{ marginBottom: "-7px" }}
                                alt="Image"
                            />
                            <img
                                src="img/about-3.jpg"
                                className="img-fluid w-100 border-bottom border-5 border-primary"
                                style={{ borderTopRightRadius: "300px", borderTopLeftRadius: "300px" }}
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div
                        className="col-xl-7 fadeInRight"
                        style={{
                            visibility: isVisibleRight ? "visible" : "hidden",
                            opacity: isVisibleRight ? 1 : 0,
                            transform: isVisibleRight ? "translateX(0)" : "translateX(70px)",
                            transition: "all 2.5s ease-out",
                            overflow: "hidden",
                        }}
                    >
                        <h5 className="sub-title pe-3">About the company</h5>
                        <h1 className="display-5 mb-4">We are Trusted Immigration Consultant Agency.</h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consectetur iusto perferendis blanditiis assumenda dignissimos, commodi fuga culpa earum explicabo libero sint est mollitia saepe! Sequi asperiores rerum nemo!
                        </p>
                        <div className="row gy-4 align-items-center">
                                <div className="col-12 col-sm-6 d-flex align-items-center">
                                    <div className="icon-container" style={{ fontSize: '3rem' }}>
                                        <i className= "text-secondary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 105.93 122.88"
                                            style={{ width: '3rem', height: '3rem' }}
                                        >
                                            <path
                                                d="M56.92,73.14a1.62,1.62,0,0,1-1.86.06A65.25,65.25,0,0,1,38.92,58.8,51.29,51.29,0,0,1,28.06,35.37C26.77,27.38,28,19.7,32,13.45a27,27,0,0,1,6-6.66A29.23,29.23,0,0,1,56.36,0,26,26,0,0,1,73.82,7.12a26,26,0,0,1,4.66,5.68c4.27,7,5.19,16,3.31,25.12A55.29,55.29,0,0,1,56.92,73.14Zm-19,.74V101.7l30.15,13V78.87a65.17,65.17,0,0,0,6.45-5.63v41.18l25-12.59v-56l-9.61,3.7a61.61,61.61,0,0,0,2.38-7.81l9.3-3.59A3.22,3.22,0,0,1,105.7,40a3.18,3.18,0,0,1,.22,1.16v62.7a3.23,3.23,0,0,1-2,3L72.72,122.53a3.23,3.23,0,0,1-2.92,0l-35-15.17L4.68,122.53a3.22,3.22,0,0,1-4.33-1.42A3.28,3.28,0,0,1,0,119.66V53.24a3.23,3.23,0,0,1,2.32-3.1L18.7,43.82a58.63,58.63,0,0,0,2.16,6.07L6.46,55.44v59l25-12.59V67.09a76.28,76.28,0,0,0,6.46,6.79ZM55.15,14.21A13.72,13.72,0,1,1,41.43,27.93,13.72,13.72,0,0,1,55.15,14.21Z"
                                            />
                                            </svg>
                                        </i>
                                    </div>
                                    <h5 className="ms-4">Best Immigration Resources</h5>
                                </div>

                                <div className="col-12 col-sm-6 d-flex align-items-center">
                                    <i className="text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '3rem', height: '3rem'}}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M12,5A5,5 0 0,1 17,10A5,5 0 0,1 12,15A5,5 0 0,1 7,10A5,5 0 0,1 12,5M12,6C11.59,6.62 11.25,7.29 11.04,8H12.96C12.75,7.29 12.42,6.62 12,6M10.7,6.22C9.78,6.53 9,7.17 8.54,8H10C10.18,7.38 10.4,6.78 10.7,6.22M13.29,6.22C13.59,6.78 13.82,7.38 14,8H15.46C15,7.17 14.21,6.54 13.29,6.22M8.13,9C8.05,9.32 8,9.65 8,10C8,10.35 8.05,10.68 8.13,11H9.82C9.78,10.67 9.75,10.34 9.75,10C9.75,9.66 9.78,9.33 9.82,9H8.13M10.83,9C10.78,9.32 10.75,9.66 10.75,10C10.75,10.34 10.78,10.67 10.83,11H13.17C13.21,10.67 13.25,10.34 13.25,10C13.25,9.66 13.21,9.32 13.17,9H10.83M14.18,9C14.22,9.33 14.25,9.66 14.25,10C14.25,10.34 14.22,10.67 14.18,11H15.87C15.95,10.68 16,10.35 16,10C16,9.65 15.95,9.32 15.87,9H14.18M8.54,12C9,12.83 9.78,13.46 10.7,13.78C10.4,13.22 10.18,12.63 10,12H8.54M11.04,12C11.25,12.72 11.59,13.38 12,14C12.42,13.38 12.75,12.72 12.96,12H11.04M14,12C13.82,12.63 13.59,13.22 13.29,13.78C14.21,13.46 15,12.83 15.46,12H14M7,17H17V19H7V17Z" />
                                        </svg>
                                    </i>
                                    <h5 className="ms-4">Return Visas Available</h5>
                                </div>
                            <div className="col-4 col-md-3">
                                <div className="bg-light text-center rounded p-3">
                                    <div className="mb-2">
                                            <i className="text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    id="ticket"
                                                    style={{ width: '120px', height: '120px', fill: 'currentColor' }}
                                                >
                                                    <path d="M4.906 11.541l3.551 3.553 6.518-6.518-3.553-3.551-6.516 6.516zm14.198-4.877-1.511-1.512a2.024 2.024 0 0 1-2.747-2.746L13.335.894a1.017 1.017 0 0 0-1.432 0L.893 11.904a1.017 1.017 0 0 0 0 1.432l1.512 1.51a2.024 2.024 0 0 1 2.747 2.748l1.512 1.51a1.015 1.015 0 0 0 1.432 0L19.104 8.096a1.015 1.015 0 0 0 0-1.432zM8.457 16.719l-5.176-5.178L11.423 3.4l5.176 5.176-8.142 8.143z" />
                                                </svg>
                                            </i>
                                    </div>
                                    <h1 className="display-5 fw-bold mb-2">34</h1>
                                    <p className="text-muted mb-0">Years of Experience</p>
                                </div>
                            </div>
                            <div className="col-8 col-md-9">
                                    <div className="mb-5">
                                        <p className="text-primary h6 mb-3 d-flex align-items-center">
                                            <i className="text-secondary me-2 d-inline-flex align-items-center">
                                                <svg
                                                    id="Layer_1"
                                                    data-name="Layer 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 122.88 102.97"
                                                    style={{ width: '20px', height: '20px' }}
                                                >
                                                    <path d="M4.82,69.68c-14.89-16,8-39.87,24.52-24.76,5.83,5.32,12.22,11,18.11,16.27L92.81,5.46c15.79-16.33,40.72,7.65,25.13,24.07l-57,68A17.49,17.49,0,0,1,48.26,103a16.94,16.94,0,0,1-11.58-4.39c-9.74-9.1-21.74-20.32-31.86-28.9Z" />
                                                </svg>
                                            </i>
                                            Offer 100% Genuine Assistance
                                        </p>
                                        <p className="text-primary h6 mb-3 d-flex align-items-center">
                                            <i className="text-secondary me-2 d-inline-flex align-items-center">
                                                <svg
                                                    id="Layer_1"
                                                    data-name="Layer 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 122.88 102.97"
                                                    style={{ width: '20px', height: '20px' }}
                                                >
                                                    <path d="M4.82,69.68c-14.89-16,8-39.87,24.52-24.76,5.83,5.32,12.22,11,18.11,16.27L92.81,5.46c15.79-16.33,40.72,7.65,25.13,24.07l-57,68A17.49,17.49,0,0,1,48.26,103a16.94,16.94,0,0,1-11.58-4.39c-9.74-9.1-21.74-20.32-31.86-28.9Z" />
                                                </svg>
                                            </i>
                                            It is Faster Reliable Execution
                                        </p>
                                        <p className="text-primary h6 mb-3 d-flex align-items-center">
                                            <i className="text-secondary me-2 d-inline-flex align-items-center">
                                                <svg
                                                    id="Layer_1"
                                                    data-name="Layer 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 122.88 102.97"
                                                    style={{ width: '20px', height: '20px' }}
                                                >
                                                    <path d="M4.82,69.68c-14.89-16,8-39.87,24.52-24.76,5.83,5.32,12.22,11,18.11,16.27L92.81,5.46c15.79-16.33,40.72,7.65,25.13,24.07l-57,68A17.49,17.49,0,0,1,48.26,103a16.94,16.94,0,0,1-11.58-4.39c-9.74-9.1-21.74-20.32-31.86-28.9Z" />
                                                </svg>
                                            </i>
                                            Accurate Expert Advice
                                        </p>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        <div
                                            id="phone-tada"
                                            className="d-flex align-items-center justify-content-center me-4"
                                            style={{
                                                animation: isVisiblePhone ? "tada 1s infinite" : "none",
                                                transition: "all 0.5s ease-out",
                                            }}
                                        >
                                            <a href="" className="position-relative">
                                                <i className="text-primary me-3"></i> {/* Added 'me-3' to give space */}
                                                <div className="position-absolute" style={{ top: "0", left: "25px" }}>
                                                    <span>
                                                        <i className="text-secondary"></i>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>

                                        <i className="d-flex align-items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 122.879 122.785"
                                                style={{ width: '80px', height: '80px' }}
                                            >
                                                <path
                                                    d="M29.789,59.399c3.635,6.556,7.821,12.852,13.274,18.597c5.452,5.777,12.236,11.035,21.031,15.515 c0.649,0.324,1.266,0.324,1.817,0.097c0.844-0.324,1.688-1.006,2.532-1.85c0.649-0.649,1.46-1.688,2.305-2.824 c3.375-4.447,7.563-9.964,13.469-7.205c0.13,0.064,0.228,0.13,0.357,0.194l19.7,11.327c0.065,0.032,0.131,0.098,0.195,0.13 c2.597,1.785,3.667,4.544,3.699,7.66c0,3.181-1.168,6.75-2.888,9.769c-2.272,3.992-5.615,6.621-9.478,8.374 c-3.667,1.688-7.757,2.597-11.685,3.181c-6.166,0.908-11.943,0.324-17.851-1.493c-5.777-1.784-11.587-4.738-17.948-8.665 l-0.454-0.293c-2.921-1.817-6.069-3.765-9.152-6.068c-11.328-8.537-22.849-20.87-30.347-34.437 c-6.297-11.392-9.737-23.693-7.854-35.41c1.039-6.426,3.797-12.268,8.601-16.13c4.187-3.375,9.834-5.226,17.136-4.576 c0.844,0.064,1.59,0.552,1.98,1.265l12.625,21.356c1.851,2.402,2.077,4.771,1.071,7.14c-0.844,1.948-2.531,3.733-4.836,5.42 c-0.681,0.584-1.492,1.168-2.336,1.785c-2.824,2.045-6.037,4.414-4.934,7.206L29.789,59.399L29.789,59.399L29.789,59.399z M107.916,18c2.594,0,4.696,2.103,4.696,4.696s-2.103,4.696-4.696,4.696s-4.696-2.103-4.696-4.696S105.322,18,107.916,18 L107.916,18z M75.697,17.983c2.6,0,4.707,2.107,4.707,4.706s-2.107,4.705-4.707,4.705s-4.704-2.106-4.704-4.705 S73.098,17.983,75.697,17.983L75.697,17.983z M92.384,17.983c2.6,0,4.707,2.107,4.707,4.706s-2.107,4.705-4.707,4.705 s-4.705-2.106-4.705-4.705S89.784,17.983,92.384,17.983L92.384,17.983z M73.012,0c-3.518,0-6.527,1.238-9.031,3.714 s-3.714,5.486-3.714,9.032v22.368c0,3.545,1.237,6.555,3.714,9.032c2.476,2.476,5.486,3.713,9.031,3.713h10.472 c-0.731,2.813-1.632,5.486-2.757,7.99c-1.098,2.533-2.982,4.952-5.571,7.259c4.98-1.294,9.397-3.235,13.308-5.796 c3.884-2.532,7.26-5.711,10.045-9.454h11.626c3.518,0,6.528-1.266,9.032-3.713c2.504-2.477,3.713-5.487,3.713-9.032V12.746 c0-3.518-1.237-6.528-3.713-9.032C116.689,1.21,113.68,0,110.134,0C98.822,0,84.324,0,73.012,0L73.012,0L73.012,0z"
                                                />
                                            </svg>
                                        </i>

                                        <div className="d-flex flex-column justify-content-center ms-4"> {/* Added 'ms-4' to give space */}
                                            <span className="text-primary">Have any questions?</span>
                                            <span className="text-secondary" style={{ letterSpacing: "2px" }}>
                                                Free: +4474 3891 4638
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
