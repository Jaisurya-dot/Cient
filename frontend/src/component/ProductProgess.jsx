import React, { useEffect, useRef, useState } from "react";
import { FiClipboard, FiUsers, FiPackage, FiCheckCircle, FiTruck } from "react-icons/fi";

const steps = [
    {
        label: "Submit Requirements",
        icon: <FiClipboard size={28} className="mx-auto text-blue-500" />,
    },
    {
        label: "Supplier Selection",
        icon: <FiUsers size={28} className="mx-auto text-purple-500" />,
    },
    {
        label: "Sample Approval",
        icon: <FiPackage size={28} className="mx-auto text-yellow-500" />,
    },
    {
        label: "Bulk Production",
        icon: <FiCheckCircle size={28} className="mx-auto text-green-500" />,
    },
    {
        label: "Shipping & Delivery",
        icon: <FiTruck size={28} className="mx-auto text-teal-500" />,
    },
];

export default function ProductSourcingStepper() {
    const [current, setCurrent] = useState(0);
    const [startProgress, setStartProgress] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer: triggers progress animation when section is visible
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStartProgress(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Animate progress after section is in view
    useEffect(() => {
        if (startProgress && current < steps.length) {
            const timer = setTimeout(() => setCurrent(current + 1), 900);
            return () => clearTimeout(timer);
        }
    }, [startProgress, current]);

    return (
        <section
            ref={sectionRef}
            className="w-full py-10 bg-gradient-to-br from-white via-gray-50 to-green-50"
            id="product-sourcing-section"
        >
            <div className="max-w-3xl mx-auto px-4 flex flex-col gap-20">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    Product Sourcing Progress
                </h2>
                {/* Progress Bar */}
                <div>


                    <div className="relative h-2 bg-gray-200 rounded mb-12">
                        <div
                            className="absolute h-2 bg-green-500 rounded transition-all duration-700"
                            style={{
                                width: `${(current / (steps.length - 1)) * 100}%`,
                                maxWidth: "100%",
                            }}
                        ></div>
                    </div>
                    {/* Steps */}
                    <div className="flex justify-between items-end relative z-10">
                        {steps.map((step, idx) => (
                            <div key={step.label} className="flex flex-col items-center flex-1">
                                {/* Icon */}
                                <div
                                    className={`rounded-full p-2 mb-2 border-2 transition-all duration-500
                  ${idx < current
                                            ? " border-green-500 text-white"
                                            : idx === current
                                                ? "bg-white border-green-500 text-green-500"
                                                : "bg-white border-gray-300 text-gray-400"
                                        }
                `}
                                    style={{ boxShadow: idx === current ? "0 0 0 4px #bbf7d0" : "none" }}
                                >
                                    {step.icon}
                                </div>
                                {/* Label */}
                                <span
                                    className={`text-xs sm:text-sm text-center font-medium transition-colors duration-500
                  ${idx < current
                                            ? "text-green-600"
                                            : idx === current
                                                ? "text-green-700"
                                                : "text-gray-400"
                                        }
                `}
                                >
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Current Step Description */}
                    <div className="mt-10 text-center text-lg text-green-800 font-semibold min-h-[32px]">
                        {current < steps.length
                            ? `Step ${current + 1} of ${steps.length}: ${steps[current].label}`
                            : <span className=" font-bold">Process Complete! 🎉</span>}
                    </div>
                </div>
            </div>
        </section>
    );
}
