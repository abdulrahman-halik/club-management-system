import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Modal from '../ui/Modal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

    const openContactModal = (e) => {
        e.preventDefault();
        setIsContactModalOpen(true);
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
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
                        <Link to="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            About
                        </Link>
                        <button
                            onClick={openContactModal}
                            className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                        >
                            Contact
                        </button>
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
                <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-2 duration-200">
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
                            to="/about"
                            className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <button
                            onClick={openContactModal}
                            className="text-gray-700 hover:text-blue-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                        >
                            Contact
                        </button>

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

            {/* Contact Modal */}
            <Modal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title="Contact Us"
            >
                <div className="space-y-6">
                    <p className="text-gray-600">
                        We'd love to hear from you. Reach out to us for any inquiries or information.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <MapPin className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-3 text-base text-gray-700">
                                <p className="font-medium text-gray-900">Address</p>
                                <p className="mt-1">Allewewa Muslim School Ground,<br />Allewewa,<br />Kebithigollewa</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Phone className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-3 text-base text-gray-700">
                                <p className="font-medium text-gray-900">Phone</p>
                                <a href="tel:+1234567890" className="mt-1 block hover:text-blue-600 transition-colors">+1 (234) 567-890</a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Mail className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-3 text-base text-gray-700">
                                <p className="font-medium text-gray-900">Email</p>
                                <a href="mailto:info@unitedcricket.com" className="mt-1 block hover:text-blue-600 transition-colors">info@unitedcricket.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 text-center">
                            Follow us on social media
                        </p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-800 transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        </header>
    );
};

export default Header;
