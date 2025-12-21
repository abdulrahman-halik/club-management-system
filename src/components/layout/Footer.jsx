import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Socials */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">United Youth Club</h3>
                        <p className="text-sm">United We Play. Fostering talent and community through the spirit of cricket.</p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/teams" className="hover:text-blue-400 transition-colors">Teams</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                                <span>Allewewa Muslim School Ground,<br />Allewewa,<br />Kebithigollewa</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-blue-500 flex-shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-blue-500 flex-shrink-0" />
                                <a href="mailto:info@unitedcricket.com" className="hover:text-white transition-colors">info@unitedcricket.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} United Cricket Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
