"use client"
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Contacts from "./components/contacts";
import Training from "./components/training";
import Testimonial from "./components/testimonial";
import Country from "./components/country";
import Features from "./components/features";
import Service from "./components/service";
import Facts from "./components/counterfacts";
import About from "./components/about";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import Topbar from "./components/topbar";
import TopArrow from "./components/toparrow";

export default function Home() {
  return (
      <>
          <Topbar />
          <Navbar />
          <Carousel />
          <About />
          <Facts />
          <Service />
          <Features />
          <Country />
          <Testimonial />
          <Training />
          <Contacts />
          <Footer />
          <Copyright />
          <TopArrow />
      </>
  );
}
