import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link 
                    to="/" 
                    className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
                >
                    CleanHub
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(({ name, path }) => (
                        <div key={name} className="relative group">
                            <Link
                                to={path}
                                className={`px-1 py-2 text-sm font-medium transition-colors ${location.pathname === path ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {name}
                            </Link>
                            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-300 ${location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </div>
                    ))}
                    <button className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-medium rounded-md hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X className="h-6 w-6 text-gray-900" />
                    ) : (
                        <Menu className="h-6 w-6 text-gray-900" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 py-4 space-y-4 bg-white/95 backdrop-blur-sm border-t border-gray-100">
                    {navLinks.map(({ name, path }) => (
                        <Link
                            key={name}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === path ? 'bg-blue-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            {name}
                        </Link>
                    ))}
                    <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-base font-medium rounded-md hover:shadow-md transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;