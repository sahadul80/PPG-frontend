"use client";
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import ContactForm from "../../../components/contactForm";
import ContactCTA from "../../../components/contactCTA";
import TopArrow from "../../../components/toparrow";
import Sidebar from "../../../components/sider";

export default function ApplicationProcessPage() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                    
                        <h1 className="text-2xl font-semibold mb-6">
                            Application Services by PPG for UK Universities
                        </h1>
                        <p className="mb-4">
                            At PPG, we are proud to be one of the leading organizations helping students worldwide achieve their goal of studying in the UK. The UK is renowned for its fantastic education system, and a degree from a UK university is highly valued by employers.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Our Services</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Access to 140+ universities</li>
                            <li>100% cashback on IELTS</li>
                            <li>Free eligibility test</li>
                            <li>Offer letter within 72 hours</li>
                            <li>Free academic and career guidance</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Why Choose PPG?</h2>
                        <p className="mb-4">
                            Our experienced team has helped thousands of students secure places in UK universities. With exclusive partnerships and deep knowledge of the UK application process, we provide comprehensive support, ensuring you have the best chance of success.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Find The Best University</h2>
                        <p className="mb-4">
                            Our certified counselors guide you to find the best university tailored to your goals and financial situation. Use our university comparison tool to explore options by subject, ranking, location, and more.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Application Support</h2>
                        <p className="mb-4">
                            Our team simplifies the application process, ensuring you submit all necessary documents on time. We assist with English Language certification if needed, providing expert guidance throughout.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Visa Assistance</h2>
                        <p className="mb-4">
                            We help you navigate the visa process, offering tailored recommendations based on your goals and financial situation. Our experts ensure you meet all requirements for a successful application.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Scholarship Support</h2>
                        <p className="mb-4">
                            We help you explore scholarship opportunities, providing detailed guidance on application deadlines and requirements to maximize your chances of securing funding.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Application Preparation</h2>
                        <p className="mb-4">
                            Our counselors review your personal statement and documents to ensure your application is strong. We aim to make the process as stress-free as possible.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Application Submission</h2>
                        <p className="mb-4">
                            Submit your application through us and receive a response within 72 hours. We assist with document submission, payment, and final confirmation of access.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Visa Types</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Short-term study visa</li>
                            <li>Tier 4 student visa</li>
                        </ul>
                        <p className="mb-4">
                            Our team explains visa requirements and organizes the necessary documents, offering guidance for the interview and immigration process.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Get in Touch</h2>
                        <p className="mb-4">
                            Book a free consultation with our friendly and knowledgeable advisors. Let us help you start your academic journey with confidence.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <ContactForm />
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
            <TopArrow />
            <ContactCTA />
        </div>
    );
}
