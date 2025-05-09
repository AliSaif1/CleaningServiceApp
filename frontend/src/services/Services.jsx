import React from 'react';
import { Check, Star, Shield, Clock, Leaf, Sparkles, Droplets, Home, Building, Calendar } from 'lucide-react';

const Services = () => {
    const serviceCategories = [
        {
            title: 'Residential Cleaning',
            description: 'Comprehensive cleaning solutions for your home',
            icon: <Home className="w-6 h-6 text-primary-600" />,
            services: [
                {
                    name: 'Standard Cleaning',
                    description: 'Weekly or bi-weekly maintenance cleaning',
                    features: ['Dusting surfaces', 'Vacuuming/mopping', 'Bathroom sanitization', 'Kitchen cleaning'],
                    price: '$120+'
                },
                {
                    name: 'Deep Cleaning',
                    description: 'Thorough cleaning of every corner',
                    features: ['Baseboard cleaning', 'Inside appliances', 'Window sills', 'Detailed bathroom scrubbing'],
                    price: '$250+'
                },
                {
                    name: 'Move In/Out Cleaning',
                    description: 'Complete cleaning for transitions',
                    features: ['Wall washing', 'Inside cabinets', 'Light fixtures', 'Full floor care'],
                    price: '$300+'
                }
            ]
        },
        {
            title: 'Commercial Cleaning',
            description: 'Professional cleaning for your business',
            icon: <Building className="w-6 h-6 text-primary-500" />,
            services: [
                {
                    name: 'Office Cleaning',
                    description: 'Daily or weekly office maintenance',
                    features: ['Desk sanitization', 'Common area cleaning', 'Restroom services', 'Trash removal'],
                    price: 'Custom Quote'
                },
                {
                    name: 'Retail Cleaning',
                    description: 'Storefront and showroom cleaning',
                    features: ['Floor maintenance', 'Display cleaning', 'Entryway care', 'High-touch surface disinfection'],
                    price: 'Custom Quote'
                },
                {
                    name: 'Industrial Cleaning',
                    description: 'Specialized facility cleaning',
                    features: ['Heavy-duty floor care', 'Equipment cleaning', 'High-ceiling dusting', 'Waste management'],
                    price: 'Custom Quote'
                }
            ]
        },
        {
            title: 'Specialty Services',
            description: 'Targeted cleaning solutions',
            icon: <Sparkles className="w-6 h-6 text-primary-600" />,
            services: [
                {
                    name: 'Carpet Cleaning',
                    description: 'Professional deep carpet cleaning',
                    features: ['Stain removal', 'Deodorizing', 'Steam cleaning', 'Protective treatment'],
                    price: '$150+'
                },
                {
                    name: 'Window Cleaning',
                    description: 'Interior and exterior window service',
                    features: ['Streak-free finish', 'Screen cleaning', 'Track cleaning', 'Hard water stain removal'],
                    price: '$200+'
                },
                {
                    name: 'Post-Construction',
                    description: 'Cleanup after remodeling',
                    features: ['Debris removal', 'Fine dust elimination', 'Surface polishing', 'Final touch cleaning'],
                    price: '$350+'
                }
            ]
        }
    ];

    const benefits = [
        {
            title: "Certified Professionals",
            description: "All cleaners undergo rigorous training and background checks",
            icon: <Shield className="w-8 h-8 text-primary-500" />
        },
        {
            title: "Eco-Friendly Products",
            description: "We use only green-certified cleaning solutions",
            icon: <Leaf className="w-8 h-8 text-green-500" />
        },
        {
            title: "Flexible Scheduling",
            description: "Available 7 days a week with online booking",
            icon: <Calendar className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Satisfaction Guarantee",
            description: "We'll reclean if you're not 100% satisfied",
            icon: <Check className="w-8 h-8 text-indigo-500" />
        }
    ];

    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 -z-10" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                                Premium Cleaning
                            </span> Services
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Detailed service offerings designed to meet your specific cleaning needs with the highest standards of quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="space-y-16">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-blue-50">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                                    <p className="text-gray-600">{category.description}</p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                {category.services.map((service, sIndex) => (
                                    <div key={sIndex} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                                        <div className="p-6 pb-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                            <p className="text-gray-600 mb-4">{service.description}</p>
                                            <ul className="space-y-2 mb-6">
                                                {service.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-gray-900">{service.price}</span>
                                                <button className="text-primary-600 font-medium hover:text-primary-800 transition-colors">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">CleanHub Advantage</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What sets us apart from other cleaning services
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple steps to a cleaner space
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "1", title: "Consultation", description: "We discuss your specific needs" },
                        { step: "2", title: "Custom Plan", description: "Tailored cleaning strategy" },
                        { step: "3", title: "Execution", description: "Professional cleaning team" },
                        { step: "4", title: "Quality Check", description: "Final inspection" }
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Cleaning Solution?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                        Contact us for specialized cleaning requirements not listed here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                            Get a Free Quote
                        </button>
                        <button className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                            Call Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;