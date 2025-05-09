import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, HeartHandshake, Shield, Leaf, Sparkles, Home } from 'lucide-react';

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

const About = () => {
    const stats = [
        { value: "500+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-primary-500" /> },
        { value: "98%", label: "Satisfaction Rate", icon: <HeartHandshake className="w-8 h-8 text-green-500" /> },
        { value: "5+", label: "Years Experience", icon: <Award className="w-8 h-8 text-yellow-500" /> },
        { value: "Eco", label: "Friendly Products", icon: <Leaf className="w-8 h-8 text-emerald-500" /> }
    ];

    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Founder & CEO",
            bio: "With 10+ years in professional cleaning services, Sarah founded CleanHub to revolutionize home maintenance.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop"
        },
        {
            name: "Michael Chen",
            role: "Operations Manager",
            bio: "Michael ensures every cleaning meets our exacting standards through rigorous quality control processes.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
        },
        {
            name: "Elena Rodriguez",
            role: "Lead Trainer",
            bio: "Elena develops our cleaning protocols and trains all team members in our signature methods.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop"
        }
    ];

    const milestones = [
        { year: "2018", event: "Founded in a small apartment with 3 team members" },
        { year: "2019", event: "Launched commercial cleaning division" },
        { year: "2020", event: "Certified as a Green Cleaning Service" },
        { year: "2021", event: "Expanded to 3 major cities" },
        { year: "2022", event: "Reached 500+ recurring clients" },
        { year: "2023", event: "Featured in Forbes' 'Top Home Services'" }
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
                            Our <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Story</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            From humble beginnings to becoming the most trusted cleaning service in the region
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Mission Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={{
                            hidden: { opacity: 0, x: -50 },
                            show: { opacity: 1, x: 0 }
                        }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                More Than <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Just Cleaning</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At CleanHub, we believe a clean space transforms how you live and work. Our mission is to deliver exceptional cleaning services that enhance your quality of life while respecting your time and environment.
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: <Sparkles className="w-6 h-6 text-primary-500" />,
                                        title: "Our Vision",
                                        description: "To redefine cleanliness standards while promoting sustainable practices in the cleaning industry."
                                    },
                                    {
                                        icon: <Home className="w-6 h-6 text-primary-500" />,
                                        title: "Our Promise",
                                        description: "Every cleaning is performed with meticulous attention to detail and care for your home."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-4"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative"
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                show: { opacity: 1, x: 0 }
                            }}
                        >
                            <Card3D>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10" />
                                    <motion.img
                                        src="https://images.pexels.com/photos/6196678/pexels-photo-6196678.jpeg"
                                        alt="CleanHub team working"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </Card3D>
                        </motion.div>
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Stats Section */}
            <AnimatedSection>
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Card3D className="bg-white p-8 rounded-xl text-center">
                                        <motion.div
                                            className="mx-auto w-16 h-16 mb-4 rounded-full bg-blue-50 flex items-center justify-center"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {stat.icon}
                                        </motion.div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </Card3D>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Team Section */}
            <AnimatedSection>
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Team</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The passionate professionals behind CleanHub's success
                        </p>
                    </motion.div>
                    <motion.div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10 }}
                            >
                                <Card3D className="bg-white rounded-xl overflow-hidden">
                                    <motion.div
                                        className="aspect-square overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                                        <p className="text-gray-600">{member.bio}</p>
                                    </div>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Timeline Section */}
            <AnimatedSection>
                <section className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Journey</span>
                        </h2>
                    </motion.div>
                    <motion.div className="relative" variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}>
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-0.5"></div>

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className={`relative pl-10 md:pl-0 pb-10 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                {/* Year Label - Always visible on desktop */}
                                <motion.div
                                    className={`hidden md:block absolute top-0 font-medium text-gray-500
                            ${index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {milestone.year}
                                </motion.div>

                                {/* Dot with year (visible on mobile) */}
                                <motion.div
                                    className={`absolute top-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium md:hidden
                            ${index % 2 === 0 ? 'left-0' : 'left-0'}`}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {milestone.year}
                                </motion.div>

                                <Card3D className={`bg-white p-6 border border-gray-100 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    <p className="text-gray-900">{milestone.event}</p>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Values Section */}
            <AnimatedSection>
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div className="text-center mb-16" variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                        }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Core <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Values</span>
                            </h2>
                        </motion.div>
                        <motion.div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Excellence",
                                    description: "We never compromise on quality, delivering consistent results that exceed expectations.",
                                    icon: <Sparkles className="w-8 h-8 text-primary-500" />
                                },
                                {
                                    title: "Integrity",
                                    description: "Honest pricing, transparent processes, and trustworthy team members you can rely on.",
                                    icon: <Shield className="w-8 h-8 text-blue-500" />
                                },
                                {
                                    title: "Sustainability",
                                    description: "Environmentally-friendly products and practices that protect your home and our planet.",
                                    icon: <Leaf className="w-8 h-8 text-green-500" />
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                    whileHover={{ y: -10 }}
                                >
                                    <Card3D className="bg-white p-8 rounded-xl">
                                        <motion.div
                                            className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {value.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </Card3D>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the CleanHub Difference?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Join thousands of satisfied customers who trust us with their spaces.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-8 py-3.5 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                                whileHover={{ y: -3 }}
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
                                className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Meet Our Team
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default About;