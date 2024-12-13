import Link from 'next/link';
import React from 'react';

export default function Features() {
    return (
        <div className="container-fluid features overflow-hidden py-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
                    </div>
                    <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
                    </p>
                </div>
                <div className="row g-4 justify-content-center text-center">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-atlas fa-4x text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: "5rem", height: "5rem" }}
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                    >
                                        <g>
                                            <path d="M406.195,383.984c-8.391,15.734-19.922,28.859-34.516,39.609c-14.656,10.719-32.188,18.703-52.563,23.969   c-8.906,2.25-18.234,3.813-27.703,5.094V512h-70.828v-58.156c-20.172-1.703-39.453-4.844-57.609-9.844   c-27.719-7.594-64.016-38.25-64.016-38.25c-3.109-1.813-5.172-5-5.609-8.531c-0.453-3.563,0.766-7.156,3.313-9.688l35.484-35.5   c3.828-3.781,9.766-4.5,14.359-1.688c0,0,26.563,23.063,46.688,28.563c20.125,5.469,40.094,8.219,60.016,8.219   c25.125,0,45.891-4.438,62.359-13.313c16.5-8.938,24.719-22.75,24.719-41.625c0-13.594-4.031-24.313-12.172-32.188   c-8.109-7.813-21.828-12.734-41.188-14.891l-63.563-5.469c-37.641-3.672-66.672-14.172-87.063-31.375   c-20.453-17.266-30.609-43.453-30.609-78.453c0-19.375,3.906-36.625,11.766-51.797c7.875-15.172,18.563-27.984,32.172-38.422   c13.594-10.469,29.438-18.313,47.469-23.531c7.547-2.188,15.453-3.625,23.484-4.938V0h70.828v50.094   c16.531,1.625,32.266,4.281,46.906,8.313c24.844,6.781,50.938,27.188,50.938,27.188c3.266,1.688,5.484,4.875,6.047,8.5   c0.563,3.688-0.641,7.313-3.219,9.969l-33.281,33.781c-3.547,3.594-9.031,4.531-13.563,2.188c0,0-19.703-14.031-36.734-18.469   c-17.016-4.438-34.891-6.688-53.719-6.688c-24.609,0-42.797,4.719-54.531,14.109c-11.781,9.453-17.625,21.734-17.625,36.875   c0,13.641,4.109,24.078,12.531,31.359c8.359,7.344,22.469,12.109,42.359,14.125l55.703,4.75   c41.297,3.656,72.563,14.625,93.734,32.922c21.203,18.328,31.781,45.016,31.781,80.016   C418.742,350.016,414.554,368.281,406.195,383.984z" />
                                        </g>
                                    </svg>
                                </i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Cost-Effective</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <Link className="btn btn-secondary rounded-pill" href="#">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-atlas fa-4x text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 56.48 56.48"
                                        style={{ width: "5rem", height: "5rem" }}
                                        fill="currentColor"
                                    >
                                        <g>
                                            <g>
                                                <path d="M55.026,9.939H1.454C0.65,9.939,0,10.59,0,11.393v33.695c0,0.803,0.65,1.454,1.454,1.454h53.572    c0.804,0,1.454-0.651,1.454-1.454V11.393C56.48,10.59,55.83,9.939,55.026,9.939z M4.373,21h6.028    c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.305c-1.288-3.298-4.392-6.042-9.083-7.178L4.373,21z M11.667,35.38L8.185,23.484    c2.503,1.602,4.635,4.144,5.386,5.913l0.406,1.469l3.808-9.729h4.12l-6.123,14.24L11.667,35.38z M24.933,35.392h-3.888    l2.431-14.268h3.89L24.933,35.392z M31.699,35.605c-1.743-0.018-3.422-0.363-4.332-0.762l0.547-3.193l0.501,0.227    c1.277,0.533,2.104,0.749,3.661,0.749c1.117,0,2.314-0.437,2.325-1.393c0.007-0.625-0.501-1.071-2.015-1.771    c-1.476-0.682-3.43-1.826-3.406-3.875c0.021-2.773,2.729-4.708,6.572-4.708c1.506,0,2.713,0.31,3.483,0.599L38.51,24.57    l-0.351-0.165c-0.716-0.288-1.637-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77    c2.243,1.018,3.28,2.253,3.266,3.876C38.441,33.692,35.788,35.605,31.699,35.605z M48.549,35.397c0,0-0.355-1.64-0.473-2.138    c-0.566,0-4.534-0.006-4.98-0.006c-0.151,0.385-0.817,2.144-0.817,2.144h-4.083l5.773-13.075c0.41-0.929,1.105-1.184,2.037-1.184    h3.004l3.147,14.258L48.549,35.397L48.549,35.397z" />
                                                <path d="M46.28,24.985c-0.198,0.537-0.539,1.4-0.517,1.362c0,0-1.229,3.167-1.549,3.988h3.229c-0.156-0.714-0.901-4.12-0.901-4.12    L46.28,24.985z" />
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Visa Assistance</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <Link className="btn btn-secondary rounded-pill" href="#">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-atlas fa-4x text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: "5rem", height: "5rem" }}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M12,5A5,5 0 0,1 17,10A5,5 0 0,1 12,15A5,5 0 0,1 7,10A5,5 0 0,1 12,5M12,6C11.59,6.62 11.25,7.29 11.04,8H12.96C12.75,7.29 12.42,6.62 12,6M10.7,6.22C9.78,6.53 9,7.17 8.54,8H10C10.18,7.38 10.4,6.78 10.7,6.22M13.29,6.22C13.59,6.78 13.82,7.38 14,8H15.46C15,7.17 14.21,6.54 13.29,6.22M8.13,9C8.05,9.32 8,9.65 8,10C8,10.35 8.05,10.68 8.13,11H9.82C9.78,10.67 9.75,10.34 9.75,10C9.75,9.66 9.78,9.33 9.82,9H8.13M10.83,9C10.78,9.32 10.75,9.66 10.75,10C10.75,10.34 10.78,10.67 10.83,11H13.17C13.21,10.67 13.25,10.34 13.25,10C13.25,9.66 13.21,9.32 13.17,9H10.83M14.18,9C14.22,9.33 14.25,9.66 14.25,10C14.25,10.34 14.22,10.67 14.18,11H15.87C15.95,10.68 16,10.35 16,10C16,9.65 15.95,9.32 15.87,9H14.18M8.54,12C9,12.83 9.78,13.46 10.7,13.78C10.4,13.22 10.18,12.63 10,12H8.54M11.04,12C11.25,12.72 11.59,13.38 12,14C12.42,13.38 12.75,12.72 12.96,12H11.04M14,12C13.82,12.63 13.59,13.22 13.29,13.78C14.21,13.46 15,12.83 15.46,12H14M7,17H17V19H7V17Z" />
                                    </svg>
                                </i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Faster Processing</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <Link className="btn btn-secondary rounded-pill" href="#">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-atlas fa-4x text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        style={{ width: "5rem", height: "5rem" }}
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
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Direct Interviews</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <Link className="btn btn-secondary rounded-pill" href="#">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Link className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">
                            More Features
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
