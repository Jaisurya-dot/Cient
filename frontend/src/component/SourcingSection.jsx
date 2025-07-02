 import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Custom hook for intersection observer
function useInView(ref, { threshold = 0.1 } = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}

function SourcingSection({
  heading,
  paragraph1,
  paragraph2,
  imageSrc,
  imageAlt,
  button,
  link, // <- Use 'link' instead of 'Links'
  bgClass = "bg-gray-50",
  reverseLayout = false,
  badge,
  stats,
  features,
  secondaryButton,
  secondaryButtonLink,
  theme = "default",
}) {
  const ref = useRef();
  const [imageLoaded, setImageLoaded] = useState(false);
  const isInView = useInView(ref);

  // Theme color palette
  const themes = {
    default: {
      primary: "#8d5cff",
      accent: "#23214b",
      badge: "bg-purple-100 text-purple-800",
      statsBg: "bg-white/80",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-blue-500/20",
    },
    blue: {
      primary: "#3b82f6",
      accent: "#1e40af",
      badge: "bg-blue-100 text-blue-800",
      statsBg: "bg-white/80",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-cyan-500/20",
    },
    purple: {
      primary: "#8b5cf6",
      accent: "#6d28d9",
      badge: "bg-purple-100 text-purple-800",
      statsBg: "bg-white/80",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-pink-500/20",
    },
    green: {
      primary: "#10b981",
      accent: "#047857",
      badge: "bg-green-100 text-green-800",
      statsBg: "bg-white/80",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-emerald-500/20",
    },
  };
  const currentTheme = themes[theme] || themes.default;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, when: "beforeChildren", duration: 0.7 },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, x: reverseLayout ? 60 : -60, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 25, delay: 0.1 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: reverseLayout ? -15 : 15 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.2 } },
  };

  return (
    <motion.section
      ref={ref}
      className={`relative w-full ${bgClass} py-16 sm:py-20 lg:py-28 px-4 overflow-hidden`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-l ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}>
          {/* Text Content */}
          <motion.div className="flex-1 flex flex-col justify-center order-2 lg:order-1" variants={textVariants}>
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Badge */}
              {badge && (
                <div className={`mb-6 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${currentTheme.badge} backdrop-blur-sm`}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              )}

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: currentTheme.accent }}>
                {heading}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
                <p className="text-gray-700 font-medium">{paragraph1}</p>
                {paragraph2 && <p className="text-gray-600">{paragraph2}</p>}

                {/* Features */}
                {features && (
                  <ul className="space-y-2 pt-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stats */}
                {stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                    {stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className={`text-center p-4 rounded-lg ${currentTheme.statsBg} backdrop-blur-sm border border-white/20 shadow-sm`}
                      >
                        <div className="text-2xl font-bold" style={{ color: currentTheme.primary }}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                {(button || secondaryButton) && (
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8">
                    {button && (
                      <Link
                        to={link}
                        className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
                        style={{
                          backgroundColor: currentTheme.primary,
                          color: "white",
                        }}
                      >
                        {button}
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                    {secondaryButton && (
                      <Link
                        to={secondaryButtonLink}
                        className="inline-flex items-center justify-center px-8 sm:px-12 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-auto text-center"
                        style={{
                          borderColor: currentTheme.primary,
                          color: currentTheme.primary,
                        }}
                      >
                        {secondaryButton}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full" variants={imageVariants}>
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl w-full max-w-lg group">
              {/* Image loading skeleton */}
              {!imageLoaded && <div className="w-full h-80 sm:h-96 bg-gray-200 animate-pulse rounded-2xl lg:rounded-3xl" />}
              <img
                src={imageSrc}
                alt={imageAlt}
                className={`w-full h-80 sm:h-96 object-cover transition-all duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default SourcingSection;
