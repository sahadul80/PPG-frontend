"use client"
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    countryCode: string;
    communicationMedium: string;
    reason: string;
    agreeToPolicies: boolean;
}

type FormErrors = {
    [K in keyof FormData]?: string;
};

const countryCodes = [
    { code: "+1", label: "United States (+1)" },
    { code: "+44", label: "United Kingdom (+44)" },
    { code: "+880", label: "Bangladesh (+880)" },
    { code: "+91", label: "India (+91)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+86", label: "China (+86)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+33", label: "France (+33)" },
    { code: "+971", label: "UAE (+971)" },
];

const reasons = [
    "Study Consultations",
    "Visa Updates",
    "Tour and Travels",
    "Work Permit",
    "Offered Universities",
    "Air Ticket",
    "Language Course",
    "University Payment",
    "Accommodation",
    "Admission",
    "Visa Application",
];

const communicationOptions = ["WhatsApp", "Email", "Call"];

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        countryCode: "+1",
        communicationMedium: "",
        reason: "",
        agreeToPolicies: false,
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
        if (!formData.communicationMedium.trim())
            newErrors.communicationMedium = "Please select a preferred communication method.";
        if (!formData.reason.trim()) newErrors.reason = "Please select a reason for communication.";
        if (!formData.agreeToPolicies)
            newErrors.agreeToPolicies = "You must agree to the privacy policy.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only numeric input
        const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        setFormData((prev) => ({
            ...prev,
            phoneNumber: value,
        }));
    };

    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true); 
        try {
            const response = await fetch("/api/contactForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Data submitted successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    countryCode: "+1",
                    communicationMedium: "",
                    reason: "",
                    agreeToPolicies: false,
                });
                setErrors({});
            } else {
                toast.error("Failed to submit data.");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            toast.error("An error occurred while submitting data.");
        } finally {
            setSubmitting(false); // Reset submitting state after submission
        }
    };

    return (
        <div className="coaching-section py-8">
            <Toaster />
            <div className="mx-10 max-w-l text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Feel free to ask your questions here. You will be contacted soon. Stay updated!
                </p>
            </div>
            <div className="bg-light rounded">
                <form onSubmit={handleSubmit} className="mx-auto max-w-xl p-5">
                    <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
                        {/* First Name and Last Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold leading-6">
                                First Name
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
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold leading-6">
                                Last Name
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
                                Company/Institution
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
                                Phone Number
                            </label>
                            <div className="flex gap-x-2">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="block w-1/4 rounded-md border px-3 py-1"
                                >
                                    {countryCodes.map(({ code, label }) => (
                                        <option key={code} value={code}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handlePhoneChange} // Handle numeric input
                                    maxLength={15} // Limiting input length
                                    className="block w-full rounded-md border px-3 py-1"
                                />
                            </div>
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                        </div>
                        {/* Communication Medium */}
                        <div>
                            <label htmlFor="communicationMedium" className="block text-sm font-semibold leading-6">
                                Preferred Communication
                            </label>
                            <select
                                name="communicationMedium"
                                id="communicationMedium"
                                value={formData.communicationMedium}
                                onChange={handleChange}
                                className="block w-full rounded-md border px-3 py-1"
                            >
                                <option value="" disabled>
                                    Prefered Communication Method
                                </option>
                                {communicationOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors.communicationMedium && (
                                <p className="text-red-500 text-sm">{errors.communicationMedium}</p>
                            )}
                        </div>
                        {/* Reason */}
                        <div>
                            <label htmlFor="reason" className="block text-sm font-semibold leading-6">
                                Purpose
                            </label>
                            <select
                                name="reason"
                                id="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                className="block w-full rounded-md border px-3 py-1"
                            >
                                <option value="" disabled>
                                    Purpose of Communication
                                </option>
                                {reasons.map((reason) => (
                                    <option key={reason} value={reason}>
                                        {reason}
                                    </option>
                                ))}
                            </select>
                            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                        </div>
                    </div>
                    {/* Agreement and Submit */}
                    <div className="flex items-center gap-x-4 sm:col-span-2 py-4">
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
                    {/* Submit Button */}
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full text-white rounded py-2"
                        >
                            {submitting ? "Submitting..." : "Let's talk"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
