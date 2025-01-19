"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Topbar from "../../../../components/topbar";
import ContactForm from "../../../../components/contactForm";
import ContactCTA from "../../../../components/contactCTA";
import TopArrow from "../../../../components/toparrow";
import Loading from "../../../../components/loading";

// Define the structure of the visa data
interface VisaSubtype {
    name: string;
    description: string;
    eligibility: string;
    fee: {
        currency: string;
        amount: number;
    };
    processing_time: string;
    validity: string;
    image: {
        path: string;
        alt: string;
    };
}

interface VisaData {
    type: string;
    subtypes: VisaSubtype[];
}

export default function VisaTypePage() {
    const { types } = useParams();
    const [visaData, setVisaData] = useState<VisaData | null>(null);
    const [visibleCount, setVisibleCount] = useState(3); // State to manage visible cards

    useEffect(() => {
        const fetchVisaData = async () => {
            try {
                const response = await fetch(`/api/visa?type=${types}`);
                if (response.ok) {
                    const data: VisaData = await response.json();
                    setVisaData(data);
                } else {
                    console.error(`Error fetching visa data: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Error fetching visa data:", error);
            }
        };

        if (types) {
            fetchVisaData();
        }
    }, [types]);

    if (!visaData) {
        return <Loading />;
    }

    // Handle showing more cards
    const visibleSubtypes = visaData.subtypes.slice(0, visibleCount);

    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <h1 className="text-xl text-center font-bold mb-6">{visaData.type}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {visibleSubtypes.map((subtype) => (
                                <div
                                    key={subtype.name}
                                    className="border rounded-lg shadow-lg p-4 bg-white"
                                >
                                    <img
                                        src={subtype.image.path}
                                        alt={subtype.image.alt}
                                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    />
                                    <h2 className="text-l text-center font-semibold">{subtype.name}</h2>
                                    <p className="text-gray-700">{subtype.description}</p>
                                    <ul className="mt-4 text-gray-600">
                                        <li>
                                            <strong>Eligibility:</strong> {subtype.eligibility}
                                        </li>
                                        <li>
                                            <strong>Fee:</strong>{" "}
                                            {subtype.fee.currency} {subtype.fee.amount}
                                        </li>
                                        <li>
                                            <strong>Processing Time:</strong> {subtype.processing_time}
                                        </li>
                                        <li>
                                            <strong>Validity:</strong> {subtype.validity}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {visibleCount < visaData.subtypes.length && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={() => setVisibleCount(visibleCount + 3)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                                >
                                    View More
                                </button>
                            </div>
                        )}
                        {visibleCount > 3 && (
                            <div className="text-center mt-4">
                                <button
                                    onClick={() => setVisibleCount(3)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition"
                                >
                                    View Less
                                </button>
                            </div>
                        )}
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
