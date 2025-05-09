import { useEffect } from 'react';
import { Check, Shield, Leaf, Sparkles, Home, Building, Calendar } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 3D Card Component
const Card3D = ({ children, className = "" }) => {
    return (
        <motion.div
            className={`relative ${className}`}
            whileHover={{ y: -10 }}
            initial={{ rotateX: 0, rotateY: 0 }}
            whileInView={{
                rotateX: 5,
                rotateY: 5,
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-xl shadow-lg -z-10" 
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

    useEffect(() => {
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
        <div className="space-y-24 pb-24 overflow-hidden">
            {/* Hero Section */}
            <motion.section 
                className="relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 -z-10" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <motion.div 
                        className="max-w-3xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                            <motion.span 
                                className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
                                initial={{ backgroundPosition: '0% 50%' }}
                                animate={{ backgroundPosition: '100% 50%' }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                            >
                                Premium Cleaning
                            </motion.span> Services
                        </h1>
                        <motion.p 
                            className="text-lg md:text-xl text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Detailed service offerings designed to meet your specific cleaning needs with the highest standards of quality.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Grid */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-16">
                        {serviceCategories.map((category, index) => (
                            <motion.div 
                                key={index} 
                                className="space-y-8"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <motion.div 
                                    className="flex items-center gap-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div 
                                        className="p-3 rounded-lg bg-blue-50"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                                        <p className="text-gray-600">{category.description}</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="grid md:grid-cols-3 gap-6"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: { 
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.2
                                            }
                                        }
                                    }}
                                >
                                    {category.services.map((service, sIndex) => (
                                        <motion.div
                                            key={sIndex}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                        >
                                            <Card3D className="overflow-hidden">
                                                <div className="p-6 pb-4">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                                    <ul className="space-y-2 mb-6">
                                                        {service.features.map((feature, fIndex) => (
                                                            <motion.li 
                                                                key={fIndex} 
                                                                className="flex items-start gap-2"
                                                                whileHover={{ x: 5 }}
                                                            >
                                                                <motion.div
                                                                    whileHover={{ scale: 1.2 }}
                                                                >
                                                                    <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                                                                </motion.div>
                                                                <span className="text-gray-700">{feature}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium text-gray-900">{service.price}</span>
                                                        <motion.button 
                                                            className="text-primary-600 font-medium hover:text-primary-800 transition-colors"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            Book Now
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </Card3D>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Benefits Section */}
            <AnimatedSection>
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div 
                            className="text-center mb-16"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                The <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">CleanHub Advantage</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                What sets us apart from other cleaning services
                            </p>
                        </motion.div>
                        <motion.div 
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={{
                                hidden: { opacity: 0 },
                                show: { 
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Card3D className="p-8">
                                        <motion.div 
                                            className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {benefit.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </Card3D>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Process</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Simple steps to a cleaner space
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid md:grid-cols-4 gap-8"
                        variants={{
                            hidden: { opacity: 0 },
                            show: { 
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {[
                            { step: "1", title: "Consultation", description: "We discuss your specific needs" },
                            { step: "2", title: "Custom Plan", description: "Tailored cleaning strategy" },
                            { step: "3", title: "Execution", description: "Professional cleaning team" },
                            { step: "4", title: "Quality Check", description: "Final inspection" }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <motion.div 
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.step}
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-12 text-center text-white"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Cleaning Solution?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Contact us for specialized cleaning requirements not listed here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button 
                                className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get a Free Quote
                            </motion.button>
                            <motion.button 
                                className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Call Now
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default Services;