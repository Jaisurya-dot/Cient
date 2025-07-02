import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import LanguageToggleButton from './LanguageToggleButton';
import "./component_css/Navbar.css";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setProductDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setProductDropdownOpen(false);
    }, [location]);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/About", label: "About" },
        { to: "/Service", label: "Service" },
        { to: "/Contact", label: "Contact" }
    ];

    const productLinks = [
        { to: "/Products", label: "Products" },
        { to: "/Blog", label: "Blog" },
        { to: "/Testimonal", label: "Testimonials" }
    ];

    const mobileExtraLinks = [
        // { to: "/How_its_work", label: "How it Works" },
        // { to: "/Get_Quote", label: "Get Quote" }
    ];

    return (
        <nav className="navbar bg-base-100 shadow-md w-full sticky top-0 z-50 px-4 lg:px-6"
            role="navigation"
            aria-label="Main Navigation">
            <div className="max-w-7xl mx-auto min-md:flex min-md:gap-140 max-sm:flex max-sm:gap-50 items-center h-16">
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold hover:opacity-80 transition-opacity duration-200 flex-shrink-0">
                    {/* <span className="text-emerald-700">Sino</span>
                    <span className="text-gray-800 ml-1">India</span> */}
                    <img src="ChatGPT Image Jun 30, 2025, 01_18_51 PM.png" alt="" className='size-50' />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex items-center space-x-5">
                        {navLinks.slice(0, 2).map(link => (
                            <li key={link.to} className="relative group">
                                <Link
                                    to={link.to}
                                    className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.to
                                            ? 'text-emerald-600'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                        ))}

                        {/* Products Dropdown */}
                        <li className="relative group" ref={dropdownRef}>
                            <button
                                onClick={() => setProductDropdownOpen((o) => !o)}
                                onMouseEnter={() => setProductDropdownOpen(true)}
                                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
                                aria-haspopup="true"
                                aria-expanded={productDropdownOpen}
                            >
                                <span>Products</span>
                                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180' : ''
                                    }`} />
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </button>
                            <div
                                className={`absolute left-0 top-full mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 z-30 ${productDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}
                                onMouseLeave={() => setProductDropdownOpen(false)}
                            >
                                <div className="py-2">
                                    {productLinks.map(link => (
                                        <Link
                                            key={link.to}
                                            to={link.to}
                                            className={`block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-600 transition ${location.pathname === link.to
                                                    ? 'text-emerald-600 bg-emerald-50'
                                                    : 'text-gray-700'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        {navLinks.slice(2).map(link => (
                            <li key={link.to} className="relative group">
                                <Link
                                    to={link.to}
                                    className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.to
                                            ? 'text-emerald-600'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <LanguageToggleButton />
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center space-x-2">
                    <LanguageToggleButton  />
                    <button
                        onClick={() => setMobileMenuOpen((o) => !o)}
                        className="p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition"
                        aria-label="Open menu"
                    >
                        {mobileMenuOpen ? <IoClose className="w-6 h-6" /> : <TfiMenu className="size-8 relative bottom-1" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-[#00000089] bg-opacity-40 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-72 max-w-xs bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <Link to="/" className="text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-emerald-700">Sino</span>
                            <span className="text-gray-800 ml-1">India</span>
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition"
                            aria-label="Close menu"
                        >
                            <IoClose className="w-6 h-6" />
                        </button>
                    </div>
                    <ul className="flex-1 flex flex-col space-y-1 px-4 py-4 overflow-y-auto">
                        {navLinks.map(link => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium ${location.pathname === link.to
                                            ? 'text-emerald-600 bg-emerald-50'
                                            : 'text-gray-700'
                                        } hover:bg-emerald-50 hover:text-emerald-600 transition`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        <li>
                            <button
                                className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition justify-between"
                                onClick={() => setProductDropdownOpen((o) => !o)}
                                aria-expanded={productDropdownOpen}
                                aria-controls="mobile-products-dropdown"
                            >
                                <span>Products</span>
                                <FiChevronDown className={`ml-2 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {productDropdownOpen && (
                                <ul id="mobile-products-dropdown" className="pl-4">
                                    {productLinks.map(link => (
                                        <li key={link.to}>
                                            <Link
                                                to={link.to}
                                                className={`block px-4 py-2 rounded-lg text-base ${location.pathname === link.to
                                                        ? 'text-emerald-600 bg-emerald-50'
                                                        : 'text-gray-700'
                                                    } hover:bg-emerald-50 hover:text-emerald-600 transition`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {mobileExtraLinks.map(link => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        <li>
                            <Link
                                to="/Contact"
                                className="block w-full bg-emerald-600 text-white text-center px-4 py-3 rounded-lg font-medium hover:bg-emerald-700 transition mt-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
