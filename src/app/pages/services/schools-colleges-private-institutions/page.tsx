"use client";
import ContactCTA from "../../../components/contactCTA";
import ContactForm from "../../../components/contactForm";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import TopArrow from "../../../components/toparrow";
import Topbar from "../../../components/topbar";
import Link from "next/link";

export default function InstitutionPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-2 py-2">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 p-6">
                        <p className="mb-4">
                            There are many schools and colleges across the world that want to be visited by well-renowned UK universities academic or international teams, so Study in the UK services are always in demand. They want to create opportunities for their students to study at popular universities around the world, and UK universities are one of the great choices.
                        </p>
                        <h2 className="text-xl font-bold text-blue-700 mb-2">Play</h2>
                        <p className="mb-4">
                            We provide study-abroad services to schools and colleges around the world that want to get in touch with one of our partner universities. We can make an arrangement between your institute and the UK university without any charges. You can find a list of our partner universities on the{" "}
                            <Link href="../study/find-university" legacyBehavior>
                                <a className="text-green-600 font-bold hover:underline">Find University</a>
                            </Link>{" "}
                            page. Please contact us for further information.
                        </p>
                        <h2 className="text-xl font-bold text-blue-700 mb-2">Contact Us</h2>
                        <p className="mb-4">
                            Md Milon <br />
                            Partner <br />
                            <a href="mailto:MilonM@peoplepulseglobal.com" className="text-blue-500 hover:underline">
                                MilonM@peoplepulseglobal.com
                            </a> <br />
                            <a
                                href="https://wa.me/447438914638?text=Hello%20Md%20Milon,%20I%20am%20interested%20in%20learning%20more%20about%20your%20study%20abroad%20services."
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +447438914638
                            </a>
                        </p>
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
