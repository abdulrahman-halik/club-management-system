import React from 'react';
import logo from '../../../assets/logos/logo1.png';
import { Target, Users, Trophy } from 'lucide-react';

const About = () => {
    return (
        <div className="animate-in fade-in duration-500">

            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        About Our Club
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Building champions, fostering community, and creating a brighter future for our youth.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-6xl">

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

                    {/* Text Content */}
                    <div>
                        <div className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 inline-block rounded-full mb-4">
                            OUR HISTORY
                        </div>

                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                            From Humble <br /> Beginnings
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Founded in 2010, United Youth Club started as a small weekend gathering for local kids in the community park. What began with just a single soccer ball and five enthusiastic children has blossomed into a movement.
                            </p>
                            <p>
                                Over the last decade, we have grown into a premier institution for youth development, offering a wide range of sports and educational classes. We've weathered storms, celebrated championships, and most importantly, watched thousands of children grow into confident young adults.
                            </p>
                        </div>
                    </div>

                    {/* Logo Card & Stats */}
                    <div className="relative">
                        <div className="bg-[#1a1a1a] p-12 rounded-3xl shadow-2xl relative z-10 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:h-[400px] border border-gray-800">
                            <img
                                src={logo}
                                alt="United Youth Club Logo"
                                className="w-56 h-auto object-contain mb-6 opacity-90"
                            />
                            <p className="text-gray-500 font-serif italic text-xl tracking-widest opacity-80 uppercase">
                                Est. 2010
                            </p>
                        </div>

                        {/* Years Badge */}
                        <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center w-40 h-40 animate-bounce-slow border border-gray-100">
                            <div className="text-5xl font-black text-blue-600">16</div>
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider text-center mt-1">
                                Years of Service
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100 rounded-full -z-0 opacity-50 blur-xl"></div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-24">
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-club-primary mb-2">
                            16+
                        </div>
                        <div className="text-gray-600">Years of History</div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-club-primary mb-2">
                            5
                        </div>
                        <div className="text-gray-600">Championship Titles</div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-club-primary mb-2">
                            200+
                        </div>
                        <div className="text-gray-600">Active Members</div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Excellence
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Striving for the highest standards in everything we do, from on-field performance to off-field conduct.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Integrity
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Upholding honesty and fairness, teaching our youth the importance of playing not just to win, but to play right.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Community
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Fostering a supportive environment where every member feels valued, respected, and part of the United family.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
