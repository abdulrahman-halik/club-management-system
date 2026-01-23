import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-900 tracking-tight">
                            UYC
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/committee" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Committee
                        </Link>
                        <Link to="/members" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Members
                        </Link>
                        <Link to="/inventory" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Inventory
                        </Link>
                        <Link to="/governance" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Governance
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Auth Buttons & Socials - Right Side */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-blue-900 font-bold text-sm transition-colors">
                            Login
                        </Link>
                        <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg">
                            Join Us
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-3 border-l pl-4 border-gray-200 ml-2">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-800 transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/committee"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Committee
                        </Link>
                        <Link
                            to="/members"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Members
                        </Link>
                        <Link
                            to="/inventory"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inventory
                        </Link>
                        <Link
                            to="/governance"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Governance
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-blue-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="border-t border-gray-100 my-2 pt-2">
                            <Link
                                to="/login"
                                className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="text-blue-600 font-bold block px-3 py-2 rounded-md text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Join Us
                            </Link>
                        </div>

                        <div className="flex space-x-6 px-3 py-4 border-t border-gray-100 mt-2">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
                                <Twitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-600">
                                <Instagram size={24} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-800">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
