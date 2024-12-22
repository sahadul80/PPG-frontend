"use client"
import React from "react";
import Image from "next/image";
// Define the type for each country card
interface Country {
    name: string;
    description: string;
    image: string;
    link: string;
}

// Define the component props
interface CountriesProps {
    countries: Country[];
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
    return (
        <>
            {countries.map((country, index) => (
                <div key={index} className="col-lg-4">
                    <article className="group">
                        <img
                            alt={country.name}
                            src={country.image}
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                        />

                        <div className="p-4">
                            <a href="#">
                                <h3 className="text-lg font-medium text-gray-900">{country.name}</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {country.description}
                            </p>
                        </div>
                    </article>
                </div>
            ))}
                
        </>
    );
};

export default Countries;
