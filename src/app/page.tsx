"use client"
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Testimonial from "./components/testimonial";
import Features from "./components/features";
import Service from "./components/service";
import Facts from "./components/counterfacts";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import TopArrow from "./components/toparrow";
import ContactCTA from "./components/contactCTA";
import Topbar from "./components/topbar";
import TeamUpdate from "./components/teamUpdate";
import MarqueeUpdate from "./components/marqueeUpdate";
import CountryUpdate from "./components/countryUpdate";
import CoachingSection from "./components/coachingSection";

export default function Home() {
  return (
      <>
          <Topbar />
          <Navbar />
          <Carousel />
          <MarqueeUpdate />
          <Facts />
          <Service />
          <Features />
          <CountryUpdate />
          <Testimonial />
          <CoachingSection />
          <TeamUpdate />
          <Footer />
          <Copyright />
          <TopArrow />
          <ContactCTA />
      </>
  );
}
