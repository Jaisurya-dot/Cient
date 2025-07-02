// components/FAQSection.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";








export default function FAQSection() {

    const { t } = useLanguage();
    const faqs = t('faq');




    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-12 px-4 ">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-black text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow p-4">
                            <button
                                onClick={() => toggle(idx)}
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-${idx}`}
                            >
                                <span className="font-semibold text-black">{faq.question}</span>
                                {openIndex === idx ? (
                                    <FaChevronUp className="text-black" />
                                ) : (
                                    <FaChevronDown className="text-black" />
                                )}
                            </button>
                            <div
                                id={`faq-${idx}`}
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 mt-3' : 'max-h-0'}`}
                                style={{ color: "#222" }}
                            >
                                <div className="text-black">{openIndex === idx && faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
