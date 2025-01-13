"use client";
import Image from "next/image";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Topbar from "../../../components/topbar";
import TopArrow from "../../../components/toparrow";
import ContactCTA from "../../../components/contactCTA";
import ContactForm from "../../../components/contactForm";

export default function AdviceParentsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Topbar />
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">
                            UK University Application Advice for Parents
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If your child has decided that they want to study in the UK, there are a lot of steps you can take to support them in this exciting decision. Your involvement and support will be absolutely key to your childs academic success, and the best thing you can do as a parent is to support them, give them encouragement, and provide resources.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You can also help to keep track of important deadlines and take your student to open days, both in person, if possible and online, as well as helping them fill out important details and finish their personal statement.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                            Understanding the UCAS Application Process
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            UCAS, the Universities and Colleges Admissions Service is the UKs main platform for university applications, and the majority of applications are done this way, even for international students.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Personal and contact details including residency information.</li>
                            <li>Educational background and work experience, relevant qualifications, grades, and activities.</li>
                            <li>Proof of English language skills e.g., IELTS qualification if needed.</li>
                            <li>Details of how the course will be funded.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                            Personal Statement
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your child will also have to write a convincing personal statement. It is important to note that UCAS has recently said that they will be changing this process from 2026 onwards.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The personal statement will be structured into three different sections, each with its own question, and is expected to be around 4000 words long. This aims to help guide the applicant in a more structured way.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                            Financial Planning
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Attending university in the UK will require a lot of financial preparation, so it is important to start early. Sourcing funds to pay for tuition and living expenses can be stressful, so give yourselves plenty of time to do so.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You can speak with our team of trained counsellors to find out if you are eligible for funding opportunities like scholarships or bursaries. We can also discuss student loan options to cover tuition fees.
                        </p>
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
