import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
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
                                Contact Us
                            </motion.span>
                        </h1>
                        <motion.p 
                            className="text-lg md:text-xl text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            We're here to help. Reach out through any of these channels or fill out the form below.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Methods */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.div 
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <Card3D className="p-8 hover:shadow-md transition-shadow duration-300">
                                    <motion.div 
                                        className="w-12 h-12 mb-6 rounded-lg bg-blue-50 flex items-center justify-center"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {method.icon}
                                    </motion.div>
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
                                    <motion.button 
                                        className="text-primary-600 font-medium flex items-center gap-1.5 hover:text-primary-800 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        {method.action}
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

            {/* Contact Form + Map */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="grid md:grid-cols-2 gap-12">
                        <motion.div 
                            className="space-y-8"
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                show: { opacity: 1, x: 0 }
                            }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Send Us a <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Message</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                Have questions or special requests? Fill out the form and our team will get back to you promptly.
                            </p>
                            
                            <form className="space-y-6">
                                <motion.div 
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: { 
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {['first-name', 'last-name'].map((field, i) => (
                                        <motion.div
                                            key={field}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                        >
                                            <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                                                {field.includes('first') ? 'First Name' : 'Last Name'}
                                            </label>
                                            <input
                                                type="text"
                                                id={field}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                                placeholder={field.includes('first') ? 'John' : 'Doe'}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {['email', 'phone', 'subject'].map((field, i) => (
                                    <motion.div
                                        key={field}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { 
                                                opacity: 1, 
                                                y: 0,
                                                transition: { delay: 0.2 + i * 0.1 }
                                            }
                                        }}
                                    >
                                        <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                                            {field === 'phone' ? 'Phone (Optional)' : 
                                             field === 'subject' ? 'Subject' : 
                                             'Email'}
                                        </label>
                                        {field === 'subject' ? (
                                            <select
                                                id={field}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="booking">Booking Question</option>
                                                <option value="service">Service Question</option>
                                                <option value="feedback">Feedback</option>
                                                <option value="other">Other</option>
                                            </select>
                                        ) : (
                                            <input
                                                type={field === 'email' ? 'email' : 'tel'}
                                                id={field}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                                placeholder={field === 'email' ? 'john@example.com' : '(555) 123-4567'}
                                            />
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { 
                                            opacity: 1, 
                                            y: 0,
                                            transition: { delay: 0.5 }
                                        }
                                    }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </motion.div>

                                <motion.div 
                                    className="flex items-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { 
                                            opacity: 1, 
                                            y: 0,
                                            transition: { delay: 0.6 }
                                        }
                                    }}
                                >
                                    <input
                                        id="consent"
                                        name="consent"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                                        I agree to CleanHub's privacy policy
                                    </label>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { 
                                            opacity: 1, 
                                            y: 0,
                                            transition: { delay: 0.7 }
                                        }
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                        
                        <motion.div 
                            className="space-y-8"
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                show: { opacity: 1, x: 0 }
                            }}
                        >
                            <Card3D>
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
                            </Card3D>
                            
                            <Card3D className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Clock className="w-5 h-5 text-primary-500" />
                                    </motion.div>
                                    Business Hours
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                                        { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                                        { day: "Sunday", hours: "Closed" }
                                    ].map((item, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="flex justify-between"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-gray-700">{item.day}</span>
                                            <span className="text-gray-900 font-medium">{item.hours}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card3D>
                            
                            <Card3D className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <MessageSquare className="w-5 h-5 text-primary-500" />
                                    </motion.div>
                                    Quick Answers
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <motion.div 
                                            key={index}
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            <h4 className="font-medium text-gray-900">{faq.question}</h4>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card3D>
                        </motion.div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Call us now to speak with a cleaning specialist.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button 
                                className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone className="w-5 h-5" />
                                (555) 123-4567
                            </motion.button>
                            <motion.button 
                                className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="w-5 h-5" />
                                Email Support
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default Contact;