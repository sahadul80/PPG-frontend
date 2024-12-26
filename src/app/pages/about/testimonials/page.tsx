"use client"
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Testimonial from "../../../components/testimonial";
import Topbar from "../../../components/topbar";
export default function TestimonialPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Testimonial />
            <Footer />
        </>
    );
}