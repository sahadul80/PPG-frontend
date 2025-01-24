"use client";
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import ContentSection from "../../../components/contentSection";
import ContactForm from "../../../components/contactForm";
import ContactCTA from "../../../components/contactCTA";
import TopArrow from "../../../components/toparrow";
import Sidebar from "../../../components/sider";

export default function StudentAdmissionPage() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Content Section */}
                    <div className="md:w-2/3">
                        <ContentSection />
                    </div>
                    {/* Contact Form */}
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

