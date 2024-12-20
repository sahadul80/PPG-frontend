"use client"
import { useEffect, useState } from "react";
import ServicesSection from "../../components/servicesSection";
import Navbar from "../../components/navbar";
import Topbar from "../../components/topbar";
import Testimonial from "../../components/testimonial";
import TeamUpdate from "../../components/teamUpdate";
import Footer from "../../components/footer";

type Service = {
    title: string;
    description: string;
    icon: string;
    link: string;
};

export default function ServiesPage() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch("/servies/services.json"); // Adjust the path if necessary
                const data: Service[] = await response.json();
                setServices(data);
            } catch (error) {
                console.error("Failed to fetch services:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div>
            <Topbar />
            <Navbar />
            <ServicesSection services={services} />
            <Testimonial />
            <TeamUpdate />
            <Footer />
        </div>
    );
}
