import React, { useState, useEffect } from 'react';
import NewsletterSignup from '../../../components/features/NewsletterSignup';
import { MapPin, Eye, Target } from 'lucide-react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import { community, stadium, study } from '../../../assets/images/assets';

const heroImages = [community, stadium, study];



const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-full opacity-0'
                                }`}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: index === currentSlide ? 1 : 0
                            }}
                        />
                    ))}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-blue-900/70 z-10" />
                </div>

                <div className="container mx-auto text-center relative z-20 px-4">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                            United Youth Club
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <p className="text-xl md:text-2xl font-light opacity-90 italic mb-8">
                            "United We Play"
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={400}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#join" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg inline-block transform hover:scale-105 active:scale-95">
                                Join the Club
                            </a>
                            <a href="#about" className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition inline-block transform hover:scale-105 active:scale-95">
                                Learn More
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Our Activities Section */}
                    <div className="mb-16">
                        <AnimatedSection>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                    Our Activities
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    Explore the diverse ways we engage and empower our youth, from academic excellence to sporting glory and cultural celebration.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Academic Classes Card */}
                            <AnimatedSection delay={100}>
                                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={study}
                                            alt="Academic Classes"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            Academic Classes
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Supporting student athletes with dedicated study sessions and tutoring to ensure academic excellence alongside sports.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Cricket Matches Card */}
                            <AnimatedSection delay={300}>
                                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={stadium}
                                            alt="Cricket Matches"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            Cricket Matches
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Hosting competitive leagues and friendly matches in top-tier facilities, fostering teamwork and sportsmanship.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Cultural Events Card */}
                            <AnimatedSection delay={500}>
                                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={community}
                                            alt="Cultural Events"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            Cultural Events
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Celebrating diversity through festivals, community gatherings, and cultural programs that unite our members.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Vision and Mission Content */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {/* Our Vision Card */}
                        <AnimatedSection delay={200}>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                    <Eye className="text-blue-600 w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    To be the region's leading hub for youth cricket development and sportsmanship, inspiring players to excel on and off the field.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Our Mission Card */}
                        <AnimatedSection delay={400}>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                    <Target className="text-blue-600 w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    To empower young athletes through expert coaching, competitive play, and character building, creating lifelong love for the game.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
                                <MapPin className="mr-2 text-blue-600" /> Find Us
                            </h2>
                            <p className="text-gray-600 mt-2">Visit our home ground and clubhouse.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-[400px]">
                            {/* Map Placeholder */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                                className="w-full h-64 md:h-full md:w-2/3 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            ></iframe>

                            <div className="p-8 md:w-1/3 flex flex-col justify-center bg-gray-900 text-white">
                                <h3 className="text-xl font-bold mb-4">Clubhouse Address</h3>
                                <p className="mb-6 opacity-80">
                                    Allewewa Muslim School Ground,<br />
                                    Allewewa,<br />
                                    Kebithigollewa
                                </p>
                                <h4 className="font-semibold mb-2">Training Hours</h4>
                                <p className="text-sm opacity-80">
                                    Sat - Sun: 7:00 AM - 11:00 AM<br />
                                    Mon - Fri: 4:00 PM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <AnimatedSection>
                        <NewsletterSignup />
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;