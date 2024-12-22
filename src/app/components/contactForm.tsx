import React, { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToPolicies: boolean;
    countryCode: string;
}

type FormErrors = {
    [K in keyof FormData]?: string;
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeToPolicies: false,
        countryCode: "+1", // Default country code
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.company.trim()) newErrors.company = "Company name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "A valid email is required.";
        if (!formData.phoneNumber.trim() || !/^\d+$/.test(formData.phoneNumber))
            newErrors.phoneNumber = "A valid phone number is required.";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
        if (!formData.agreeToPolicies)
            newErrors.agreeToPolicies = "You must agree to the privacy policy.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

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
                setFormData({
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                    agreeToPolicies: false,
                    countryCode: "+1",
                });
                setErrors({});
            } else {
                alert("Failed to submit data.");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while submitting data.");
        }
    };

    return (
        <div className="py-8">
            {/* Form Heading */}
            <div className="mx-10 max-w-l text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Feel free to ask your questions here. You will be contacted soon. Stay updated!
                </p>
            </div>
            <div className="bg-light rounded">
                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="mx-auto max-w-xl p-5">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold leading-6">
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full rounded-md border px-3 py-1"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>
                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold leading-6">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-full rounded-md border px-3 py-1"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                        {/* Company */}
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="block w-full rounded-md border px-3 py-1"
                            />
                            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                        </div>
                        {/* Email */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border px-3 py-1"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        {/* Phone Number */}
                        <div className="sm:col-span-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6">
                                Phone number
                            </label>
                            <div className="flex gap-x-2">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="block rounded-md border px-3 py-1"
                                >
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+880">+880</option>
                                    {/* Add more country codes as needed */}
                                </select>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="block w-full rounded border px-3 py-1"
                                />
                            </div>
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                        </div>
                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded border px-3 py-1"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        {/* Agreement Checkbox */}
                        <div className="flex items-center gap-x-4 sm:col-span-2">
                            <input
                                type="checkbox"
                                name="agreeToPolicies"
                                id="agreeToPolicies"
                                checked={formData.agreeToPolicies}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="agreeToPolicies" className="text-sm font-medium text-gray-600">
                                I agree to the{" "}
                                <a href="#" className="text-red-600 underline">
                                    privacy policy
                                </a>
                            </label>
                            {errors.agreeToPolicies && (
                                <p className="text-red-500 text-sm">{errors.agreeToPolicies}</p>
                            )}
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="block w-full text-white rounded"
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
