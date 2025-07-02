import React, { useState } from "react";
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding, FaComment } from "react-icons/fa";
import { useContactStore } from "../store/contactstore.js";

export default function ContactSection() {
    const { createProduct } = useContactStore();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProduct(form);
        
        if (result.success) {
            toast.success(result.message || "Your inquiry has been submitted!", { transition: Slide });
            // Reset form on success
            setForm({
                name: "",
                phone: "",
                email: "",
                product: "",
                message: "",
            });
        } else {
            toast.error(result.message || "Submission failed. Please try again.", { transition: Slide });
        }
    };

    return (
        <section className="py-16 px-4 bg-gray-100 relative overflow-hidden">
            <ToastContainer position="bottom-center" autoClose={4000} transition={Slide} />
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-48 translate-y-48"></div>

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column - Contact Info */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="text-center relative lg:left-32 lg:text-left mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                        <div className="flex justify-center lg:justify-start space-x-6 mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaEnvelope className="text-white text-lg" />
                            </div>
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                <FaPhone className="text-white text-lg" />
                            </div>
                            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                                <FaMapMarkerAlt className="text-white text-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="lg:w-1/2">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow-xl p-8 space-y-4"
                    >
                        <div className="flex gap-3">
                            {/* Name Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaUser className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Full name"
                                />
                            </div>
                            {/* Phone Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaPhone className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your phone number"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaEnvelope className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your email address"
                                />
                            </div>
                            {/* Company Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaBuilding className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="text"
                                    name="product"
                                    required
                                    value={form.product}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your company"
                                />
                            </div>
                        </div>
                        {/* Message Field */}
                        <div className="relative">
                            <div className="absolute left-3 top-4">
                                <FaComment className="text-gray-400 text-sm" />
                            </div>
                            <textarea
                                name="message"
                                required
                                value={form.message}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={4}
                                placeholder="Message / inquiry"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                        >
                            Contact us
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
