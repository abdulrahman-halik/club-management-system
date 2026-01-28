import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Trophy, Mail, Lock } from 'lucide-react';
import Alert from '../../../components/ui/Alert';


export default function LoginForm({ onFormSubmit, loading, apiError }) {
    const [showPassword, setShowPassword] = useState(false);

    const schema = z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password is required"),
        rememberMe: z.boolean().optional()
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            rememberMe: false
        }
    });

    const onSubmit = (data) => {
        console.log('Login attempt:', data);
        // Add actual login logic here
        onFormSubmit(data);
    };

    // Compact Login UI
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
            <div className="max-w-212.5 w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-125">

                {/* Left Side - Blue Branding Section */}
                <div className="w-full lg:w-[45%] bg-linear-to-br from-[#1e6091] to-[#164a75] p-6 lg:p-10 text-white relative flex flex-col justify-between">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>

                    {/* Pattern dots */}
                    <div className="absolute top-10 left-10 opacity-20">
                        <div className="grid grid-cols-5 gap-2">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Trophy className="w-5 h-5" />
                            <span className="font-bold text-base tracking-wide">United Youth Club</span>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center my-auto">
                        <h1 className="text-2xl lg:text-3xl font-extrabold mb-3 leading-tight">
                            Welcome to <br /> CricZone
                        </h1>
                        <p className="text-blue-100 text-sm max-w-xs leading-relaxed mb-5">
                            Join the ultimate community for cricket enthusiasts.
                        </p>
                        <button className="px-5 py-2 border-2 border-white/30 hover:bg-white/10 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                            Learn More
                        </button>
                    </div>

                    <div className="relative z-10 text-center lg:text-left">
                        <div className="absolute -bottom-12 -left-12 text-white/10">
                            <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-45">
                                <path d="M6 2L3 6v12h4l4 4V2z" fillOpacity="0.1" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full lg:w-[55%] p-6 lg:p-8 flex flex-col justify-center bg-white relative">
                    <div className="max-w-sm w-full mx-auto">
                        <div className="text-center mb-6">
                            <div className="w-10 h-10 bg-blue-50/50 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 text-[#1e6091]">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Welcome Back</h2>
                            <p className="text-gray-500 text-xs">Please enter your details to sign in</p>
                        </div>

                        {apiError && (
                            <Alert type="error" message={apiError} className="mb-6" />
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Mail size={16} />
                                    </div>
                                    <input
                                        type="email"
                                        className={`w-full pl-9 pr-4 py-2.5 rounded-lg border focus:ring-2 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50 focus:bg-white ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#1e6091] focus:ring-[#1e6091]/10'}`}
                                        placeholder="Enter your Email"
                                        {...register("email")}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Lock size={16} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className={`w-full pl-9 pr-10 py-2.5 rounded-lg border focus:ring-2 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50 focus:bg-white ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#1e6091] focus:ring-[#1e6091]/10'}`}
                                        placeholder="Enter your Password"
                                        {...register("password")}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 text-[10px] mt-0.5">{errors.password.message}</p>}
                            </div>

                            <div className="flex items-center justify-between text-xs">
                                <label className="flex items-center text-gray-500 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-3.5 h-3.5 rounded border-gray-300 text-[#1e6091] focus:ring-[#1e6091] mr-2"
                                        {...register("rememberMe")}
                                    />
                                    Remember me
                                </label>
                                <a href="#" className="font-semibold text-[#1e6091] hover:text-[#164a75]">Forgot Password?</a>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1e6091] text-white py-2.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-[#164a75] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>

                        <div className="my-6 flex items-center justify-center space-x-4">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">Or login with</span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        <div className="flex justify-center space-x-3">
                            {/* Social Buttons - reusing SVG icons but cleaning up classes */}
                            <button className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-gray-50 hover:border-gray-200 hover:shadow-md flex items-center justify-center transition-all">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-100 hover:shadow-md flex items-center justify-center transition-all text-[#1877F2]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-100 hover:shadow-md flex items-center justify-center transition-all text-[#0A66C2]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-semibold text-[#1e6091] hover:text-[#164a75] transition-colors">
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
