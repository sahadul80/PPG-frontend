import { SetStateAction, useEffect, useState } from "react";

export default function Facts() {
    const [visaCategories, setVisaCategories] = useState(0);
    const [teamMembers, setTeamMembers] = useState(0);
    const [visaProcess, setVisaProcess] = useState(0);
    const [successRates, setSuccessRates] = useState(0);

    const updateCounter = (target: number, setState: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): void; }) => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < target) {
                count++;
                setState(count);
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust speed of counting
    };

    useEffect(() => {
        updateCounter(31, setVisaCategories);
        updateCounter(377, setTeamMembers);
        updateCounter(4900, setVisaProcess); // For K (multiply by 1000)
        updateCounter(98, setSuccessRates);
    }, []);

    return (
        <div className="container-fluid counter-facts py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                        <div className="counter">
                            <div
                                className="counter-icon"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100px", // Adjust as per your design
                                    width: "100px", // Adjust as per your design
                                    margin: "0 auto", // Centers the icon container itself in its parent
                                }}
                            >
                                <i className="text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: "4rem", height: "4rem" }}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M12,5A5,5 0 0,1 17,10A5,5 0 0,1 12,15A5,5 0 0,1 7,10A5,5 0 0,1 12,5M12,6C11.59,6.62 11.25,7.29 11.04,8H12.96C12.75,7.29 12.42,6.62 12,6M10.7,6.22C9.78,6.53 9,7.17 8.54,8H10C10.18,7.38 10.4,6.78 10.7,6.22M13.29,6.22C13.59,6.78 13.82,7.38 14,8H15.46C15,7.17 14.21,6.54 13.29,6.22M8.13,9C8.05,9.32 8,9.65 8,10C8,10.35 8.05,10.68 8.13,11H9.82C9.78,10.67 9.75,10.34 9.75,10C9.75,9.66 9.78,9.33 9.82,9H8.13M10.83,9C10.78,9.32 10.75,9.66 10.75,10C10.75,10.34 10.78,10.67 10.83,11H13.17C13.21,10.67 13.25,10.34 13.25,10C13.25,9.66 13.21,9.32 13.17,9H10.83M14.18,9C14.22,9.33 14.25,9.66 14.25,10C14.25,10.34 14.22,10.67 14.18,11H15.87C15.95,10.68 16,10.35 16,10C16,9.65 15.95,9.32 15.87,9H14.18M8.54,12C9,12.83 9.78,13.46 10.7,13.78C10.4,13.22 10.18,12.63 10,12H8.54M11.04,12C11.25,12.72 11.59,13.38 12,14C12.42,13.38 12.75,12.72 12.96,12H11.04M14,12C13.82,12.63 13.59,13.22 13.29,13.78C14.21,13.46 15,12.83 15.46,12H14M7,17H17V19H7V17Z" />
                                    </svg>
                                </i>
                            </div>
                            <div className="counter-content">
                                <h3>Visa Categories</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value">{visaCategories}</span>
                                    <h4
                                        className="text-secondary mb-0"
                                        style={{ fontWeight: 600, fontSize: "25px" }}
                                    >
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                        <div className="counter">
                            <div
                                className="counter-icon"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100px", // Adjust as per your design
                                    width: "100px", // Adjust as per your design
                                    margin: "0 auto", // Centers the icon container itself in its parent
                                }}
                            >
                                <i className="text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        style={{ width: "4rem", height: "4rem" }}
                                        fill="currentColor"
                                    >
                                        <g>
                                            <path d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871   c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z" />
                                            <path d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636   c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636   c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494   c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z" />
                                            <path d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386   c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z" />
                                            <path d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971   c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288   c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508   C372.404,329.085,351.289,293.307,335.269,277.303z" />
                                            <path d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871   c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z" />
                                            <path d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279   c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714   c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762   c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z" />
                                        </g>
                                    </svg>
                                </i>
                            </div>
                            <div className="counter-content">
                                <h3>Team Members</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value">{teamMembers}</span>
                                    <h4
                                        className="text-secondary mb-0"
                                        style={{ fontWeight: 600, fontSize: "25px" }}
                                    >
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                        <div className="counter">
                            <div
                                className="counter-icon"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100px", // Adjust as per your design
                                    width: "100px", // Adjust as per your design
                                    margin: "0 auto", // Centers the icon container itself in its parent
                                }}
                            >
                                <i className="text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        style={{ width: "4rem", height: "4rem" }}
                                        fill="currentColor"
                                    >
                                        <path d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>

                                </i>
                            </div>
                            <div className="counter-content">
                                <h3>Visa Process</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value">{(visaProcess / 1000).toFixed(1)}</span>
                                    <h4
                                        className="text-secondary mb-0"
                                        style={{ fontWeight: 600, fontSize: "25px" }}
                                    >
                                        K
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                        <div className="counter">
                            <div
                                className="counter-icon"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100px", // Adjust as per your design
                                    width: "100px", // Adjust as per your design
                                    margin: "0 auto", // Centers the icon container itself in its parent
                                }}
                            >
                                <i className="text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -64 640 640"
                                        style={{ width: "4rem", height: "4rem" }}
                                        fill="currentColor"
                                    >
                                        <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
                                    </svg>
                                </i>
                            </div>
                            <div className="counter-content">
                                <h3>Success Rates</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value">{successRates}</span>
                                    <h4
                                        className="text-secondary mb-0"
                                        style={{ fontWeight: 600, fontSize: "25px" }}
                                    >
                                        %
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
