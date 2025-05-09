import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, BadgeCheck } from 'lucide-react';

// 3D Card Component
const Card3D = ({ children, className = "", popular = false }) => {
    return (
        <motion.div
            className={`relative ${className}`}
            whileHover={{ y: -10 }}
            initial={{ rotateX: 0, rotateY: 0 }}
            whileInView={{
                rotateX: 5,
                rotateY: popular ? 10 : 5,
                transition: { duration: 0.5 }
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            <div className="relative z-10 h-full">
                {children}
            </div>
            <div className={`absolute inset-0 rounded-xl shadow-lg -z-10 ${popular ? 'bg-primary-500/20' : 'bg-gray-200/20'}`} 
                 style={{
                     transform: 'translateZ(-30px)',
                     filter: 'blur(10px)'
                 }} />
        </motion.div>
    );
};

// Animated Section Component
const AnimatedSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
        >
            {children}
        </motion.section>
    );
};

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
        <div className="space-y-24 pb-24 overflow-hidden">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 -z-10" />
                <motion.div 
                    className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-3xl mx-auto">
                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                                Simple Pricing
                            </span> For Every Need
                        </motion.h1>
                        <motion.p 
                            className="text-lg md:text-xl text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Choose the perfect cleaning plan for your space. Cancel or change anytime.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Subscription Plans */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Subscription <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Plans</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Recurring service with discounted rates compared to one-time cleaning
                        </p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-3 gap-8" variants={{
                        hidden: { opacity: 0 },
                        show: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}>
                        {subscriptionPlans.map((plan, index) => (
                            <motion.div 
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <Card3D popular={plan.popular}>
                                    <div className={`p-8 rounded-xl border-2 ${plan.popular ? 'border-primary-500' : 'border-gray-200'}`}>
                                        {plan.popular && (
                                            <motion.div 
                                                className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                Most Popular
                                            </motion.div>
                                        )}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                        <p className="text-gray-600 mb-6">{plan.description}</p>
                                        
                                        <div className="mb-8">
                                            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                            <span className="text-gray-600"> {plan.frequency}</span>
                                        </div>
                                        
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, fIndex) => (
                                                <motion.li 
                                                    key={fIndex} 
                                                    className="flex items-start gap-2"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <motion.span
                                                        whileHover={{ scale: 1.2 }}
                                                    >
                                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-500' : 'text-gray-400'}`} />
                                                    </motion.span>
                                                    <span className="text-gray-700">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                        
                                        <motion.button 
                                            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 
                                                ${plan.popular 
                                                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-md' 
                                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {plan.cta}
                                            {plan.popular && (
                                                <motion.span 
                                                    className="inline-block ml-2"
                                                    animate={{ rotate: [0, 10, -10, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                >
                                                    ✨
                                                </motion.span>
                                            )}
                                        </motion.button>
                                    </div>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Add-on Services */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Add-on <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Enhance your cleaning with these specialty services
                        </p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-3 gap-6" variants={{
                        hidden: { opacity: 0 },
                        show: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}>
                        {addOnServices.map((service, index) => (
                            <motion.div 
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <Card3D>
                                    <div className="border border-gray-200 rounded-xl p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                                            <motion.span 
                                                className="bg-blue-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {service.price}
                                            </motion.span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, fIndex) => (
                                                <motion.li 
                                                    key={fIndex} 
                                                    className="flex items-start gap-2"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <motion.span
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                                                    </motion.span>
                                                    <span className="text-gray-700">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <motion.button 
                                            className="w-full py-2 px-4 border border-primary-500 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Add to Plan
                                        </motion.button>
                                    </div>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Comparison Table */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Plan <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Comparison</span>
                        </h2>
                    </motion.div>

                    <motion.div 
                        className="overflow-x-auto"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            show: { opacity: 1, x: 0 }
                        }}
                    >
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
                                    <motion.tr 
                                        key={rowIndex} 
                                        className="border-b border-gray-200"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                        whileHover={{ backgroundColor: '#f8fafc' }}
                                    >
                                        <td className="py-4 text-gray-700">{row.feature}</td>
                                        <td className="py-4 px-4 text-center text-gray-600">{row.basic}</td>
                                        <td className="py-4 px-4 text-center text-gray-600">{row.standard}</td>
                                        <td className="py-4 px-4 text-center text-gray-600">{row.premium}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection>
                <section className="max-w-3xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Pricing <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">FAQ</span>
                        </h2>
                    </motion.div>

                    <motion.div className="space-y-6" variants={{
                        hidden: { opacity: 0 },
                        show: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}>
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
                            <motion.div 
                                key={index} 
                                className="border-b border-gray-200 pb-6"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    show: { opacity: 1, x: 0 }
                                }}
                                whileHover={{ x: 5 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
                                <p className="text-gray-600">{item.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Final CTA */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-12 text-center text-white"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                        >
                            <BadgeCheck className="w-12 h-12 mx-auto mb-4" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Our team is ready to help you choose the perfect cleaning solution for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button 
                                className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Support
                                <motion.span 
                                    className="inline-block ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                            <motion.button 
                                className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Call Now: (555) 123-4567
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default Pricing;