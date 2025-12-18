import React from 'react';
import NewsletterSignup from '../components/features/NewsletterSignup';
import { MapPin } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-500">

            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                        United Cricket Club
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 italic mb-8">
                        "United We Play"
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#join" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                            Join the Club
                        </a>
                        <a href="#about" className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To be the premier cricket development hub in the region, known for excellence and sportsmanship.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded"></div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Fostering talent through discipline, community, and the undying spirit of the game. We believe in nurturing the next generation of cricketers.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
                            <MapPin className="mr-2 text-blue-600" /> Find Us
                        </h2>
                        <p className="text-gray-600 mt-2">Visit our home ground and clubhouse.</p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-[400px]">
                        {/* Map Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                            className="w-full h-full md:w-2/3 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        ></iframe>

                        <div className="p-8 md:w-1/3 flex flex-col justify-center bg-gray-900 text-white">
                            <h3 className="text-xl font-bold mb-4">Clubhouse Address</h3>
                            <p className="mb-6 opacity-80">
                                123 Cricket Lane,<br />
                                Sports City, SC 54321
                            </p>
                            <h4 className="font-semibold mb-2">Training Hours</h4>
                            <p className="text-sm opacity-80">
                                Sat - Sun: 7:00 AM - 11:00 AM<br />
                                Tue - Thu: 5:00 PM - 8:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <NewsletterSignup />
                </div>
            </section>

        </div>
    );
};

export default Home;
