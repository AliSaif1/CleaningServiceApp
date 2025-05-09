import React from 'react';
import { Check, Star, Shield, Calendar, Zap, BadgeCheck } from 'lucide-react';

const Pricing = () => {
    const subscriptionPlans = [
        {
            name: "Basic",
            price: "$99",
            frequency: "per month",
            description: "Essential cleaning for small spaces",
            popular: false,
            features: [
                "Bi-weekly cleaning",
                "1 bathroom",
                "Up to 800 sq ft",
                "Standard cleaning supplies",
                "Vacuuming & mopping"
            ],
            cta: "Get Started"
        },
        {
            name: "Standard",
            price: "$149",
            frequency: "per month",
            description: "Perfect for most homes",
            popular: true,
            features: [
                "Weekly cleaning",
                "2 bathrooms",
                "Up to 1500 sq ft",
                "Premium cleaning supplies",
                "Appliance exterior cleaning",
                "Window sills"
            ],
            cta: "Most Popular"
        },
        {
            name: "Premium",
            price: "$249",
            frequency: "per month",
            description: "Comprehensive cleaning solution",
            popular: false,
            features: [
                "Twice weekly cleaning",
                "3+ bathrooms",
                "Up to 3000 sq ft",
                "Eco-friendly supplies",
                "Full appliance cleaning",
                "Baseboard cleaning",
                "Priority scheduling"
            ],
            cta: "Get Premium"
        }
    ];

    const addOnServices = [
        {
            name: "Deep Cleaning",
            price: "+$100",
            description: "Intensive once-off cleaning",
            features: ["Inside appliances", "Window tracks", "Detailed grout cleaning"]
        },
        {
            name: "Carpet Cleaning",
            price: "+$75",
            description: "Professional steam cleaning",
            features: ["Stain treatment", "Deodorizing", "Protective coating"]
        },
        {
            name: "Fridge Cleaning",
            price: "+$45",
            description: "Interior deep clean",
            features: ["Shelf organization", "Expired item removal", "Deodorizing"]
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
                                Simple Pricing
                            </span> For Every Need
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Choose the perfect cleaning plan for your space. Cancel or change anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Subscription Plans */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Subscription <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Plans</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Recurring service with discounted rates compared to one-time cleaning
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {subscriptionPlans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg 
                                ${plan.popular ? 'border-primary-500 shadow-md' : 'border-gray-200 hover:border-primary-300'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6">{plan.description}</p>
                                
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600"> {plan.frequency}</span>
                                </div>
                                
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2">
                                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-500' : 'text-gray-400'}`} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button 
                                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 
                                        ${plan.popular 
                                            ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-md' 
                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Add-on Services */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Add-on <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Enhance your cleaning with these specialty services
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {addOnServices.map((service, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                                <span className="bg-blue-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                                    {service.price}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-2 px-4 border border-primary-500 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
                                Add to Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Plan <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Comparison</span>
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="pb-4 text-left font-medium text-gray-500">Features</th>
                                {subscriptionPlans.map((plan, index) => (
                                    <th key={index} className="pb-4 px-4 text-center font-medium text-gray-900">
                                        {plan.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: "Cleaning Frequency", basic: "Bi-weekly", standard: "Weekly", premium: "Twice weekly" },
                                { feature: "Max Square Footage", basic: "800 sq ft", standard: "1500 sq ft", premium: "3000 sq ft" },
                                { feature: "Bathrooms Included", basic: "1", standard: "2", premium: "3+" },
                                { feature: "Supply Quality", basic: "Standard", standard: "Premium", premium: "Eco-friendly" },
                                { feature: "Appliance Cleaning", basic: "No", standard: "Exterior", premium: "Full" },
                                { feature: "Priority Scheduling", basic: "No", standard: "No", premium: "Yes" }
                            ].map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b border-gray-200">
                                    <td className="py-4 text-gray-700">{row.feature}</td>
                                    <td className="py-4 px-4 text-center text-gray-600">{row.basic}</td>
                                    <td className="py-4 px-4 text-center text-gray-600">{row.standard}</td>
                                    <td className="py-4 px-4 text-center text-gray-600">{row.premium}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Pricing <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">FAQ</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            question: "Can I change or cancel my plan anytime?",
                            answer: "Yes, you can change or cancel your subscription plan with 7 days notice before your next scheduled cleaning."
                        },
                        {
                            question: "Are cleaning supplies included?",
                            answer: "Yes, we bring all necessary cleaning supplies and equipment. You can request specific products if needed."
                        },
                        {
                            question: "Do you offer one-time cleaning services?",
                            answer: "Yes, we offer one-time cleaning at 20% higher rates than our subscription prices. Contact us for a quote."
                        },
                        {
                            question: "Is there a contract or long-term commitment?",
                            answer: "No, all our plans are month-to-month with no long-term contracts."
                        }
                    ].map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
                            <p className="text-gray-600">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-12 text-center text-white">
                    <div className="max-w-2xl mx-auto">
                        <BadgeCheck className="w-12 h-12 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Our team is ready to help you choose the perfect cleaning solution for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                                Contact Support
                            </button>
                            <button className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                                Call Now: (555) 123-4567
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;