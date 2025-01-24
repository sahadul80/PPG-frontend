"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import { TransitionLink } from "../../../components/TransitionLink";
import ContactForm from "../../../components/contactForm";
import VisaCategories from "../../../components/visaCategories";
import ContactCTA from "../../../components/contactCTA";
import TopArrow from "../../../components/toparrow";
import Sidebar from "../../../components/sider";

interface VisaCategory {
    type: string;
    subtypes: { name: string; image: { path: string; alt: string } }[];
}

export default function VisaCategoriesPage() {
    const [visaCategories, setVisaCategories] = useState<VisaCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchVisaCategories() {
            try {
                const response = await fetch("/api/visa");
                if (!response.ok) throw new Error("Failed to fetch visa categories.");
                const data = await response.json();
                setVisaCategories(data.visa_categories);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchVisaCategories();
    }, []);

    if (loading) return <TransitionLink href="" className="text-center mt-4" children=""></TransitionLink>;
    if (error) return <div className="text-center mt-4 text-red-600">{error}</div>;

    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <VisaCategories />
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
