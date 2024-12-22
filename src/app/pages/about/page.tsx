"use client"
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import TeamUpdate from "../../components/teamUpdate";
import Testimonial from "../../components/testimonial";
import Topbar from "../../components/topbar";
import Image from "next/image";
export default function AboutPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <div>
            Abot section will be updated soon...
            </div>
            <Testimonial />
            <TeamUpdate />
            <Footer />
        </>
    );
}