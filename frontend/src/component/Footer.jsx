 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Mock React Icons components
const FaFacebookF = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const FaInstagram = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541zm7.072 0c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541z"/>
  </svg>
);

const FaLinkedinIn = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FaYoutube = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FaTwitter = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const FaPhoneAlt = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const FaEnvelope = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const FaMapMarkerAlt = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

 

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [currentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.querySelector('#footer-section');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { icon: FaFacebookF, name: "Facebook", url: "#", color: "hover:text-blue-500" },
        { icon: FaInstagram, name: "Instagram", url: "#", color: "hover:text-pink-500" },
        { icon: FaLinkedinIn, name: "LinkedIn", url: "#", color: "hover:text-blue-400" },
        { icon: FaYoutube, name: "YouTube", url: "#", color: "hover:text-red-500" },
        { icon: FaTwitter, name: "Twitter", url: "#", color: "hover:text-blue-400" }
    ];

    const quickLinks = [
        { name: "About Us", url: "/About" },
        { name: "Our Services", url: "/Service" },
        { name: "Success Stories", url: "/Testimonal" },
        { name: "Blog", url: "/Blog" },
        { name: "Contact", url: "/Contact" },
        { name: "Admin Portal", url: "/Login" }
    ];

    const services = [
        "Product Sourcing",
        "Quality Control",
        "Supplier Verification",
        "Logistics Support",
        "Custom Manufacturing",
        "Trade Consultation"
    ];
    

    return (
        <footer id="footer-section" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Content */}
                <div className="pt-16 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Sino India Jeda Trading
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
                                    Connecting global businesses with trusted Chinese suppliers through comprehensive sourcing, 
                                    quality control, and logistics services for reliable international trade.
                                </p>
                            </div>

                            {/* Enhanced Social Links */}
                            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <Link
                                                key={index}
                                                to={social.url}
                                                aria-label={social.name}
                                                className={`group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25`}
                                                onMouseEnter={() => setHoveredSocial(index)}
                                                onMouseLeave={() => setHoveredSocial(null)}
                                            >
                                                <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-110" />
                                                
                                                {/* Tooltip */}
                                                {hoveredSocial === index && (
                                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                                                        {social.name}
                                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                                                    </div>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">Verified Suppliers</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">Secure Trading</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.url} 
                                            className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                                        >
                                            <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            {link.name}
                                        </Link>
                                         
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h3 className="text-white font-semibold mb-6 text-lg">Our Services</h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-center text-gray-400">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex-shrink-0" />
                                        <span className="text-sm">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <FaPhoneAlt className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Call Us</h4>
                                    <p className="text-gray-400">(209) 555-0104</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <FaEnvelope className="text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email Us</h4>
                                    <p className="text-gray-400">info@sinoindiatrading.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-green-500/20 rounded-xl">
                                    <FaMapMarkerAlt className="text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Visit Us</h4>
                                    <p className="text-gray-400">Mumbai, India & Guangzhou, China</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Bottom Bar */}
                <div className={`border-t border-gray-800/50 pt-8 pb-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400">
                                © {currentYear} <span className="text-white font-semibold">Sino India Jeda Trading</span>. All rights reserved.
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Powered by <span className="text-blue-400">MakeWebBetter</span>
                            </p>
                        </div>
  
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-20 right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
}