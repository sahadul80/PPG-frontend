import React, { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToPolicies: boolean;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeToPolicies: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked; // Safely access `checked` for checkboxes

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contactForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Data submitted successfully!");
            } else {
                alert("Failed to submit data.");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while submitting data.");
        }
    };

    return (
        <div className="flex justify-center py-10">
            <div className="bg-light rounded p-10">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Feel free to ask your questions here. You will be contacted soon. Stay updated!
                    </p>
                </div>
                <img
                    src="/img/about-2.png"
                    className="img-fluid w-100"
                    style={{ marginBottom: "-7px" }}
                    alt="Image"
                />
                <img
                    src="/img/about-3.jpg"
                    className="img-fluid w-100 border-bottom border-5 border-primary"
                    style={{ borderTopRightRadius: "300px", borderTopLeftRadius: "300px" }}
                    alt="Image"
                />
            </div>
        <div className="p-10">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-10">
                <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold leading-6"
                        >
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm shadow-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-semibold leading-6"
                        >
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="company"
                            className="block text-sm font-semibold leading-6"
                        >
                            Company
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-semibold leading-6"
                        >
                            Phone number
                        </label>
                        <div className="mt-2">
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6"
                        >
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4 sm:col-span-2">
                        <input
                            type="checkbox"
                            name="agreeToPolicies"
                            id="agreeToPolicies"
                            checked={formData.agreeToPolicies}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                            htmlFor="agreeToPolicies"
                            className="text-sm font-medium text-gray-600"
                        >
                            I agree to the{" "}
                            <a href="#" className="text-red-600 underline">
                                privacy policy
                            </a>
                        </label>
                    </div>
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;
