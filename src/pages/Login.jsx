import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Trophy } from 'lucide-react';
import stadiumImg from '../assets/images/stadium.jpeg'; // Reusing existing asset

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        // Add actual login logic here
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-12">
                <div className="mb-10">
                    <Link to="/" className="flex items-center text-blue-900 font-bold text-xl mb-8">
                        <Trophy className="w-6 h-6 mr-2" />
                        United Youth Club
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Member Login</h1>
                    <p className="text-gray-500">Sign in to access your dashboard, match schedules, and club announcements.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Username or Email Address
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-400 bg-gray-50"
                            placeholder="e.g. member@unitedyouth.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-400 bg-gray-50"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                                Remember Me
                            </label>
                        </div>
                        <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all shadow-lg shadow-blue-500/30"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-600 font-bold hover:text-blue-500">
                            Join the Club
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block w-1/2 relative bg-blue-900">
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10" />
                <img
                    src={stadiumImg}
                    alt="Stadium"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-20 left-12 right-12 z-20 text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                        <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Elevate Your Game</h2>
                    <p className="text-lg text-blue-100 leading-relaxed max-w-md">
                        Join a community of passionate young athletes. Track your progress, register for events, and stay connected.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
