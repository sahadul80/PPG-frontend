"use client";
import ContactCTA from "../../../components/contactCTA";
import ContactForm from "../../../components/contactForm";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import TopArrow from "../../../components/toparrow";
import Topbar from "../../../components/topbar";
import Link from "next/link";
import Sidebar from "../../../components/sider";

export default function PartnerUniPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-2 py-2">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-lg">
                        <p className="mb-4">
                            Our service is not limited to the students only but also we provide a number of services for the universities that we are associated with. Our services for universities are as follows:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Organise local & International Education Fair/Expo</li>
                            <li>Spot assessment day</li>
                            <li>University open admission day</li>
                            <li>Campus visit</li>
                            <li>School Visit (through the branding/regional office)</li>
                            <li>Seminar/Workshop arrangement</li>
                            <li>Promote newly introduced courses by our partners</li>
                            <li>Study tour event</li>
                        </ul>
                        <p className="mb-4">All services are completely free for students and our partners.</p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Our Promotion</h2>
                        <p className="mb-4">
                            We do International Newspaper advertisements covering all regions that we work in, Facebook advertisements, Google advertisements, Local TV advertisements, Flyer distribution, Text Marketing, Email marketing, Facebook pages with about 2,44,628+ fans, Google+, YouTube, Twitter, Instagram, Pinterest, Blog, and Skype.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">CRM System</h2>
                        <p className="mb-4">
                            To manage our students, we have an online system for partner institutes like the EMS data management system (CRM), Centurus|One, Student and Partner Management System, Project Management System, and Express email marketing tool for the email campaign.
                        </p>

                        <p className="mb-4">
                            People Pulse Global is happy to provide appropriate services to the partner universities if required. If you are interested in joining us as one of our proud{" "}
                            <Link href="../study/find-university" legacyBehavior>
                                <a className="text-green-600 font-bold hover:underline">Partner Universities</a>
                            </Link>{" "}
                            or if you need any further information, please write us an email at{" "}
                            <a href="mailto:MilonM@peoplepulseglobal.com" className="text-blue-500 hover:underline">
                                MilonM@peoplepulseglobal.com
                            </a>.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <Sidebar />
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
