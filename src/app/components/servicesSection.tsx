"use client"
import React from "react";
import ServiceCard from "./serviceCard";
import Image from "next/image";
type Service = {
    title: string;
    description: string;
    icon: string;
    link: string;
};

type ServicesSectionProps = {
    services: Service[];
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    return (
        <div className="container mx-auto px-10 py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        link={service.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
