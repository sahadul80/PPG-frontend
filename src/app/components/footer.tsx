import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [data, setData] = useState({ email: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await fetch('/api/subscribers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: data.email }),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('You have successfully subscribed!');
                setData({ email: '' });
                toast.success(message);
            } else {
                const result = await response.json();
                setError(result.message);
                toast.error(error);
            }
        } catch (err) {
            setError('Failed to connect to the server. Please try again.');
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            <div
                className="container-fluid footer py-5 fadeIn animate__animated animate__fadeIn"
                data-wow-delay="0.2s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Contact Info */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item flex flex-col">
                                <h4 className="text-secondary mb-4">Contact Info</h4>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M12 2a8 8 0 0 0-7.992 8A12.816 12.816 0 0 0 12 22a12.816 12.816 0 0 0 7.988-12A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
                                        </svg>
                                    </i> 123 Street, New
                                    York, USA
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                        </svg>
                                    </i> info@example.com
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                                        </svg>
                                    </i> +012 345 67890
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M21 9h-3V6a1.116 1.116 0 0 0-.292-.7l-3-3A1.127 1.127 0 0 0 14 2H7a1 1 0 0 0-1 1v6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-5 11H8v-3h8zm0-11H8V4h5v2a1 1 0 0 0 1 1h2z" />
                                        </svg>
                                    </i> +012 345 67890
                                </Link>
                                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                                    <Link className="d-flex align-items-center" href="">
                                        <i className="p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 512 462.799"
                                                style={{ width: '20px', height: '20px' }}
                                            >
                                                <path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                                            </svg>
                                        </i>
                                    </Link>
                                    <Link className="d-flex align-items-center" href="">
                                        <i className="p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                style={{ width: '20px', height: '20px' }}
                                            >
                                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.68c0 .733.593 1.32 1.325 1.32H12.82V14.725h-3.1v-3.638h3.1V8.414c0-3.067 1.875-4.748 4.616-4.748 1.312 0 2.444.097 2.77.141v3.22l-1.902.001c-1.492 0-1.777.71-1.777 1.745v2.29h3.555l-.463 3.638h-3.092V24h6.066c.733 0 1.325-.588 1.325-1.32V1.326C24 .594 23.408 0 22.675 0z" />
                                            </svg>
                                        </i>
                                    </Link>
                                    <Link className="d-flex align-items-center" href="">
                                        <i className="p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                style={{ width: '20px', height: '20px' }}
                                            >
                                                <path d="M22.23 0H1.77C.79 0 0 .78 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.47c-1.14 0-2.06-.92-2.06-2.05 0-1.13.92-2.05 2.06-2.05 1.13 0 2.05.92 2.05 2.05-.01 1.13-.92 2.05-2.05 2.05zm15.1 12.98h-3.56v-5.53c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.13 1.43-2.13 2.91v5.64H9.38V9.03h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.56v6.15z" />
                                            </svg>
                                        </i>
                                    </Link>
                                    <Link className="d-flex align-items-center" href="">
                                        <i className="p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                style={{ width: '20px', height: '20px' }}
                                            >
                                                <path d="M7.75 2h8.5a5.75 5.75 0 015.75 5.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM16.5 6a1 1 0 112 0 1 1 0 01-2 0z" />
                                            </svg>
                                        </i>
                                    </Link>
                                    <Link className="d-flex align-items-center" href="">
                                        <i className="p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                style={{ width: '20px', height: '20px' }}
                                            >
                                                <path d="M23.498 6.186a3.008 3.008 0 00-2.123-2.123C19.935 3.5 12 3.5 12 3.5s-7.935 0-9.375.563A3.008 3.008 0 00.502 6.186C0 7.626 0 12 0 12s0 4.374.502 5.814a3.008 3.008 0 002.123 2.123C4.065 20.5 12 20.5 12 20.5s7.935 0 9.375-.563a3.008 3.008 0 002.123-2.123C24 16.374 24 12 24 12s0-4.374-.502-5.814zM9.75 15.75v-7.5l6.375 3.75-6.375 3.75z" />
                                            </svg>
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Opening Time */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item flex flex-col">
                                <h4 className="text-secondary mb-4">Opening Time</h4>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Mon - Friday:</h6>
                                    <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Saturday:</h6>
                                    <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Vacation:</h6>
                                    <p className="text-white mb-0">Sunday is our vacation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-secondary mb-4">Our Services</h4>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z" />
                                        </svg>
                                    </i> Business
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z" />
                                        </svg>
                                    </i> Evaluation
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z" />
                                        </svg>
                                    </i> Migrate
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z" />
                                        </svg>
                                    </i> Study
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z" />
                                        </svg>
                                    </i> Counselling
                                </Link>
                                <Link href="#" className="d-flex align-items-center">
                                    <i className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                            <path d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z" />
                                        </svg>
                                    </i> Work / Career
                                </Link>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="text-secondary mb-4">Newsletter</h4>
                                <p className="text-white mb-3">
                                    Subscribe to our newsletter for updates and offers.
                                </p>
                                <h4 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h4>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="px-4 py-2 mb-4 border rounded"
                                    />
                                    <button
                                        type="submit"
                                        className="py-2 rounded"
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Subscribe"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
