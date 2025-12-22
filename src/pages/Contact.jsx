import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                        We'd love to hear from you. Get in touch with the United Youth Club team.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[-3rem]">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <p className="text-blue-100 mb-8 leading-relaxed">
                                    Whether you have a question about our matches, membership, or anything else, our team is ready to answer all your questions.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Our Location</h3>
                                            <p className="text-blue-100">Allewewa Muslim School Ground,<br />Allewewa, Kebithigollewa</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Email Us</h3>
                                            <p className="text-blue-100">info@unitedcricket.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Call Us</h3>
                                            <p className="text-blue-100">+1 (234) 567-890</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {/* Social Icons placeholders */}
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                                        <span className="font-bold">F</span>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                                        <span className="font-bold">T</span>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                                        <span className="font-bold">I</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
