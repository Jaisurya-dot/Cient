import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const [showNav, setShowNav] = useState(window.innerWidth > 900);

    // Show/hide on scroll
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    // Show/hide on resize
    const handleResize = () => {
        setShowNav(window.innerWidth > 900);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('resize', handleResize);
        // Initial check
        setShowNav(window.innerWidth > 900);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // If width <= 900px, do not render nav at all
    if (!showNav) return null;

    return (
        <header
            className={`fixed top-0 left-1/2 z-50 transform transition-all duration-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
                -translate-x-1/2 nav-900-hide`}
        >
            <nav className="px-6 py-4 flex w-full justify-center">
                <ul className="flex space-x-6 font-semibold text-sm bg-zinc-800 px-4 py-2 rounded-full shadow-md">
                    <li><Link to={"/"} className="hover:text-orange-400 text-white">Home</Link></li>
                    <li><Link to={'/About'} className="hover:text-orange-400 text-white">About</Link></li>
                    <li><Link to={'/Product'} className="hover:text-orange-400 text-white">Product</Link></li>
                    <li><Link to={'/Service'} className="hover:text-orange-400 text-white">Service</Link></li>
                    <li><Link to={'/Contact'} className="hover:text-orange-400 text-white">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
