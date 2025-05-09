import React, { useEffect } from 'react';
import { Check, Star, Shield, Clock, Leaf } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

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
                variants={container}
            >
                {children}
            </motion.section>
        );
    };

    return (
        <div className="space-y-24 pb-24 overflow-hidden">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 -z-10" />
                <motion.div 
                    className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 flex flex-col md:flex-row items-center gap-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="md:w-1/2 space-y-6"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                Professional Cleaning
                            </span><br />
                            <motion.span 
                                className="inline-block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                For Your Space
                            </motion.span>
                        </h1>
                        <motion.p 
                            className="text-lg md:text-xl text-gray-600 max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Trusted by homes and businesses across the city. Experience the CleanHub difference with our premium cleaning services.
                        </motion.p>
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button 
                                className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book a Cleaning
                            <motion.span 
                                className="inline-block ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                            </motion.button>
                            <motion.button 
                                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2 relative"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card3D>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20" />
                                <img
                                    src="https://images.pexels.com/photos/6196678/pexels-photo-6196678.jpeg"
                                    alt="Professional cleaning service"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Card3D>
                        <motion.div 
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((item) => (
                                        <motion.img
                                            key={item}
                                            src={`https://randomuser.me/api/portraits/women/${item + 20}.jpg`}
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            alt="Happy customer"
                                            whileHover={{ y: -5 }}
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
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Trust Badges */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"
                        variants={container}
                    >
                        {['Forbes', 'TechCrunch', 'TheVerge', 'Wired'].map((brand, index) => (
                            <motion.div
                                key={brand}
                                className="opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2"
                                variants={item}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-xl md:text-2xl font-bold text-gray-700">{brand}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Services Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={item}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive cleaning solutions tailored to your specific needs
                        </p>
                    </motion.div>
                    <motion.div className="grid md:grid-cols-3 gap-8" variants={container}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -10 }}
                            >
                                <Card3D className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-100">
                                    <div className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                    <motion.button 
                                        className="mt-6 text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Features Section */}
            <AnimatedSection>
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={container}>
                            <motion.div className="space-y-8" variants={item}>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Why <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Choose Us</span>
                                </h2>
                                <p className="text-lg text-gray-600">
                                    CleanHub isn't just another cleaning service. We're committed to delivering exceptional results with every visit.
                                </p>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <motion.li 
                                            key={index} 
                                            className="flex gap-4"
                                            variants={item}
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div className="relative" variants={item}>
                                <Card3D>
                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10" />
                                        <img
                                            src="https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg"
                                            alt="Professional cleaner at work"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </Card3D>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={item}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it - hear from our satisfied customers
                        </p>
                    </motion.div>
                    <motion.div className="grid md:grid-cols-3 gap-8" variants={container}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Card3D className="bg-white p-8 border border-gray-100">
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
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-12 text-center text-white"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the CleanHub Difference?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Book your first cleaning today and enjoy 15% off your first service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button 
                                className="px-8 py-3.5 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Now
                            </motion.button>
                            <motion.button 
                                className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default Home;