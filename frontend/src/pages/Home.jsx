import React from 'react';
import { Check, Star, Shield, Clock, Leaf } from 'lucide-react';

const Home = () => {
    const services = [
        {
            title: 'Home Cleaning',
            description: 'Spotless rooms, sanitized surfaces, and fresh vibes.',
            icon: <Star className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Office Cleaning',
            description: 'Boost productivity with a tidy and clean workspace.',
            icon: <Shield className="w-6 h-6 text-blue-600" />,
        },
        {
            title: 'Deep Cleaning',
            description: 'Intensive cleaning for every corner and crevice.',
            icon: <Check className="w-6 h-6 text-green-600" />,
        },
    ];

    const testimonials = [
        {
            quote: "CleanHub transformed our office space completely. The team is professional and detail-oriented.",
            author: "Michael T., CEO at TechCorp",
            rating: 5
        },
        {
            quote: "I've tried many cleaning services, but none compare to CleanHub's attention to detail.",
            author: "Sarah M., Homeowner",
            rating: 5
        },
        {
            quote: "Reliable, thorough, and worth every penny. My apartment has never looked better.",
            author: "David K., Apartment Resident",
            rating: 4
        }
    ];

    const features = [
        {
            title: "Eco-Friendly",
            description: "We use only environmentally safe cleaning products",
            icon: <Leaf className="w-8 h-8 text-green-500" />
        },
        {
            title: "Flexible Scheduling",
            description: "Book at your convenience with our 24/7 online system",
            icon: <Clock className="w-8 h-8 text-blue-500" />
        },
        {
            title: "100% Satisfaction",
            description: "Not happy? We'll reclean for free",
            icon: <Check className="w-8 h-8 text-indigo-500" />
        }
    ];

    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 -z-10" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                Professional Cleaning
                            </span><br />
                            For Your Space
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                            Trusted by homes and businesses across the city. Experience the CleanHub difference with our premium cleaning services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                Book a Cleaning
                            </button>
                            <button className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-400 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20" />
                            <img
                                src="https://images.pexels.com/photos/6196678/pexels-photo-6196678.jpeg"
                                alt="Professional cleaning service"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((item) => (
                                        <img
                                            key={item}
                                            src={`https://randomuser.me/api/portraits/women/${item + 20}.jpg`}
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            alt="Happy customer"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">500+ Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                    {['Forbes', 'TechCrunch', 'TheVerge', 'Wired'].map((brand) => (
                        <div
                            key={brand}
                            className="opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2"
                        >
                            <div className="text-xl md:text-2xl font-bold text-gray-700">{brand}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive cleaning solutions tailored to your specific needs
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-blue-100"
                        >
                            <div className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                            <button className="mt-6 text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Why <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Choose Us</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                CleanHub isn't just another cleaning service. We're committed to delivering exceptional results with every visit.
                            </p>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10" />
                                <img
                                    src="https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg"
                                    alt="Professional cleaner at work"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <blockquote className="text-gray-600 italic mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <p className="font-medium text-gray-900">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the CleanHub Difference?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                        Book your first cleaning today and enjoy 15% off your first service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3.5 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                            Book Now
                        </button>
                        <button className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;