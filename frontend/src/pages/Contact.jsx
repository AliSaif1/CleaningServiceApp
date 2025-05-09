import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Check } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Phone className="w-6 h-6 text-primary-500" />,
            title: "Phone",
            description: "Speak directly with our customer service team",
            details: [
                { label: "Sales", value: "(555) 123-4567" },
                { label: "Support", value: "(555) 987-6543" }
            ],
            action: "Call Now"
        },
        {
            icon: <Mail className="w-6 h-6 text-primary-500" />,
            title: "Email",
            description: "Send us a message and we'll respond within 24 hours",
            details: [
                { label: "General", value: "hello@cleanhub.com" },
                { label: "Support", value: "support@cleanhub.com" }
            ],
            action: "Email Us"
        },
        {
            icon: <MapPin className="w-6 h-6 text-primary-500" />,
            title: "Office",
            description: "Visit our headquarters during business hours",
            details: [
                { label: "Address", value: "123 Clean Street, Suite 100" },
                { label: "City", value: "San Francisco, CA 94107" }
            ],
            action: "Get Directions"
        }
    ];

    const faqs = [
        {
            question: "What are your business hours?",
            answer: "Our customer service team is available Monday-Friday from 8am to 6pm PST."
        },
        {
            question: "How quickly do you respond to emails?",
            answer: "We typically respond to all emails within 24 hours, often much sooner."
        },
        {
            question: "Do you service my area?",
            answer: "We currently serve the Bay Area with plans to expand. Enter your zip code in our booking form to check availability."
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
                                Contact Us
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            We're here to help. Reach out through any of these channels or fill out the form below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 mb-6 rounded-lg bg-blue-50 flex items-center justify-center">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                            <p className="text-gray-600 mb-6">{method.description}</p>
                            <div className="space-y-3 mb-8">
                                {method.details.map((detail, dIndex) => (
                                    <div key={dIndex}>
                                        <p className="text-sm font-medium text-gray-500">{detail.label}</p>
                                        <p className="text-gray-700">{detail.value}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="text-primary-600 font-medium flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                                {method.action}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form + Map */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Send Us a <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Message</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Have questions or special requests? Fill out the form and our team will get back to you promptly.
                        </p>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="booking">Booking Question</option>
                                    <option value="service">Service Question</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                />
                                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                                    I agree to CleanHub's privacy policy
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.365106953582!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="CleanHub Location"
                            ></iframe>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary-500" />
                                Business Hours
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                                    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                                    { day: "Sunday", hours: "Closed" }
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between">
                                        <span className="text-gray-700">{item.day}</span>
                                        <span className="text-gray-900 font-medium">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary-500" />
                                Quick Answers
                            </h3>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index}>
                                        <h4 className="font-medium text-gray-900">{faq.question}</h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                        Call us now to speak with a cleaning specialist.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            (555) 123-4567
                        </button>
                        <button className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5" />
                            Email Support
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;