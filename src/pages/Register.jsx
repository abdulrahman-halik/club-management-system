import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Trophy, User, Mail, Lock, PenTool } from 'lucide-react';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register attempt:', formData);
        // Add actual registration logic here
    };

    // Compact Register UI
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="max-w-[1000px] w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

                {/* Left Side - Blue Branding Section */}
                <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#1e6091] to-[#164a75] p-8 lg:p-12 text-white relative flex flex-col justify-between overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>

                    {/* Abstract Circle Design */}
                    <div className="absolute bottom-20 left-12 opacity-30">
                        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Pattern dots */}
                    <div className="absolute top-12 left-8 opacity-10">
                        <div className="grid grid-cols-6 gap-1.5">
                            {[...Array(36)].map((_, i) => (
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

                    <div className="relative z-10 flex flex-col justify-center h-full max-w-md">
                        <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                            Join the <br /> Cricket Action
                        </h1>
                        <p className="text-blue-100 text-sm leading-relaxed opacity-90 max-w-sm">
                            Create an account to track stats, follow your favorite teams, and join our community.
                        </p>
                    </div>

                    {/* Decorative bottom right shapes */}
                    <div className="absolute bottom-0 right-0 opacity-10">
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50 0 L100 100 L0 100 Z" transform="rotate(180 50 50)" />
                        </svg>
                    </div>
                </div>

                {/* Right Side - Register Form */}
                <div className="w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center bg-white relative">
                    <div className="max-w-sm w-full mx-auto">
                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-50/50 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 rotate-3 text-[#1e6091]">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">Create Account</h2>
                            <p className="text-gray-500 text-sm">Please fill in your details to sign up</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e6091] focus:ring-2 focus:ring-[#1e6091]/10 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e6091] focus:ring-2 focus:ring-[#1e6091]/10 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 focus:border-[#1e6091] focus:ring-2 focus:ring-[#1e6091]/20 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Confirm Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 focus:border-[#1e6091] focus:ring-2 focus:ring-[#1e6091]/10 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center mt-1">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-3.5 h-3.5 rounded border-gray-300 text-[#1e6091] focus:ring-[#1e6091] mr-2"
                                    checked={formData.agreeToTerms}
                                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                    required
                                />
                                <label htmlFor="terms" className="text-xs text-gray-500">
                                    I agree to the <a href="#" className="font-semibold text-[#1e6091] hover:underline hover:text-[#164a75]">Terms & Conditions</a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1e6091] text-white py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-[#164a75] transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="my-6 flex items-center justify-center space-x-4">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">or sign up with</span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        <div className="flex justify-center space-x-3 mb-6">
                            <button className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-gray-50 hover:border-gray-200 hover:shadow-md flex items-center justify-center transition-all text-gray-800">
                                {/* Apple Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-100 hover:shadow-md flex items-center justify-center transition-all text-[#1877F2]">
                                {/* Facebook Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-100 hover:shadow-md flex items-center justify-center transition-all text-[#0A66C2]">
                                {/* Google Icon */}
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </button>
                        </div>

                        <p className="text-center text-xs text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[#1e6091] font-bold hover:underline hover:text-[#164a75]">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
