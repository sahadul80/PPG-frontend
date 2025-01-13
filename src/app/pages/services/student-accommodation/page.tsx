"use client";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import ContactCTA from "../../../components/contactCTA";
import TopArrow from "../../../components/toparrow";
import ContactForm from "../../../components/contactForm";

export default function StudentAccommodationPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-2 py-2">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Student Accommodation in the UK</h1>
                        <p className="mb-4">
                            Student accommodation in the UK is more than just a place to liveit is where academic, cultural, and social lives immerse. Imagine living in elegant, meticulously designed places where timeless British charm is interwoven with modern amenities. The UK offers a diverse range of housing options like university managed residence halls, shared flats, and private rentals, each catering to different budgets and requirements. Proximity to a university, a supportive community, and safety are essential factors to consider when choosing accommodation in the UK for international students. Read this blog to get invaluable insight into getting a home outside your home.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Types of Student Accommodations in the UK</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                <strong>Halls of Residence:</strong> Managed by universities, Halls of Residence offer a quintessential living experience with inclusive amenities like study areas, cafes, communal lounges, and onsite gyms. Proximity to the university ensures easy integration into campus life.
                            </li>
                            <li>
                                <strong>Private Halls of Residence:</strong> These offer contemporary facilities managed by private companies, such as highspeed internet, en-suite bathrooms, social lounges, and onsite gyms, focusing on lifestyle and comfort.
                            </li>
                            <li>
                                <strong>Private Accommodation:</strong> For students seeking more independence, options like studio apartments, flats, and rented houses provide privacy and autonomy, though students handle utility bills and rent.
                            </li>
                            <li>
                                <strong>Homestay Accommodation:</strong> Living with local families offers a unique cultural experience, providing kitchen and laundry facilities, often including meals.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">How Much is UK Student Accommodation?</h2>
                        <p className="mb-4">
                            Prices vary depending on the type, location, and facilities. University Halls of Residence typically cost GBP400 to GBP800 per month, while Private Halls of Residence range from GBP600 to GBP1,200 monthly due to modern designs and premium facilities. Private accommodation like shared flats or houses can go between GBP500 and GBP1,000 monthly, depending on location, with vibrant urban centers like London being costlier.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Student Accommodation Locations</h2>
                        <p className="mb-4">
                            Although proximity to university, safety, and an accommodative community are primary considerations, here are common accommodation locations for international students:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>London</li>
                            <li>Sheffield</li>
                            <li>Liverpool</li>
                            <li>Bath</li>
                            <li>Glasgow</li>
                            <li>Reading</li>
                            <li>Leicester</li>
                            <li>Poole</li>
                            <li>Loughborough</li>
                            <li>Bournemouth</li>
                            <li>Exeter</li>
                            <li>Plymouth</li>
                            <li>Manchester</li>
                            <li>Bristol</li>
                            <li>Edinburgh</li>
                            <li>Nottingham</li>
                            <li>Newcastle</li>
                            <li>Leeds</li>
                            <li>Aberdeen</li>
                            <li>Huddersfield</li>
                            <li>Coventry</li>
                        </ul>
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
