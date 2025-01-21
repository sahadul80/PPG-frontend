"use client";
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import TopArrow from "../../../components/toparrow";
import ContactCTA from "../../../components/contactCTA";
import ContactForm from "../../../components/contactForm";

export default function GPCPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-2 py-2">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-lg">
                        <p className="mb-4">
                            People Pulse Global offers UK educational services for government and private companies. Many talented individuals work for the government and private sector after completing their studies. Often, companies provide funds or full scholarships to their employees for higher education relevant to their fields, enhancing company features and contributing to future growth.
                        </p>
                        <p className="mb-4">
                            For these government and private companies, we are ready to assist. People Pulse Global can guide your employees to gain admission to top UK universities. We ensure they receive the best service and all necessary guidance to successfully complete their education. Our services for government and private companies include:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>UK educational services</li>
                            <li>Preparation for admission</li>
                            <li>Application process to higher institutions in the UK</li>
                            <li>Requirement gathering assistance</li>
                            <li>Personal statement guidance</li>
                            <li>Finding accommodation</li>
                            <li>Visa guidance</li>
                            <li>Pre-arrival briefing</li>
                            <li>Airport pick-up</li>
                            <li>Additional help if required</li>
                        </ul>
                        <p className="mb-4">
                            For further inquiries, please contact us at:
                        </p>
                        <ul className="mb-4">
                            <li>Phone: +447438555898</li>
                            <li>Email:
                                <a href="mailto:info@peoplepulseglobal.com" className="text-blue-500 hover:underline">
                                    info@peoplepulseglobal.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
            <TopArrow />
            <ContactCTA />
        </div>
    );
}
