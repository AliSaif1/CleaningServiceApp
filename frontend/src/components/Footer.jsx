import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const footerLinks = [
        {
            title: 'Services',
            links: [
                { name: 'Home Cleaning', path: '/services/home-cleaning' },
                { name: 'Office Cleaning', path: '/services/office-cleaning' },
                { name: 'Deep Cleaning', path: '/services/deep-cleaning' },
                { name: 'Commercial Cleaning', path: '/services/commercial-cleaning' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Blog', path: '/blog' },
                { name: 'Press', path: '/press' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Contact Us', path: '/contact' },
                { name: 'FAQs', path: '/faq' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, path: 'https://facebook.com' },
        { icon: <Twitter className="w-5 h-5" />, path: 'https://twitter.com' },
        { icon: <Instagram className="w-5 h-5" />, path: 'https://instagram.com' },
        { icon: <Linkedin className="w-5 h-5" />, path: 'https://linkedin.com' },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link 
                            to="/" 
                            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
                        >
                            CleanHub
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Professional cleaning services for homes and businesses. 
                            We deliver sparkling results with every visit.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Newsletter
                        </h3>
                        <p className="text-sm text-gray-600">
                            Subscribe to get cleaning tips and special offers.
                        </p>
                        <form className="mt-4 space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-medium rounded-md hover:shadow-md transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} CleanHub. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-indigo-600">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-indigo-600">
                            Terms of Service
                        </Link>
                        <Link to="/cookies" className="text-sm text-gray-500 hover:text-indigo-600">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;