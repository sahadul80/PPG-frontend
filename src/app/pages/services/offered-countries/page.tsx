"use client"
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import Countries from "../../../components/country";
import CountryUpdate from "../../../components/countryUpdate";

export default function CountriesPage() {

    return (
        <div>
            <Topbar />
            <Navbar />
            <CountryUpdate />
            <Footer />
        </div>
    );
}
