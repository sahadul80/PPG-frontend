import React from "react";
import Countries from "./country";
import Link from "next/link";

const countryData = [
    {
        name: "Bangladesh",
        description: "Welcome to Bamngladesh, the land of cultures, and experiences.",
        image: "img/bangladesh.jpg",
        link: "#",
    },
    {
        name: "Uinted States",
        description: "Experience the diverse landscapes and cultures in the USA.",
        image: "img/usaland.jpg",
        link: "countries-details.html",
    },
    {
        name: "Canada",
        description: "Discover the rich history and vibrant culture of Canada.",
        image: "img/canada.jpg",
        link: "countries-details.html",
    },
    {
        name: "United Kingdom",
        description: "Discover the rich history and vibrant culture of India.",
        image: "img/uk.jpg",
        link: "countries-details.html",
    },
];

const CountryUpdate: React.FC = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-6">
                <h2 className="text-2xl font-bold text-center mb-6">COUNTRIES WE OFFER</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <Countries countries={countryData} />
                </div>
            </div>
            <div className="text-center text-bold text-xl p-6">
                <Link className="rounded-pill py-3 px-5" href="#">
                    More Countries
                </Link>
            </div>
        </>
    );
};

export default CountryUpdate;
