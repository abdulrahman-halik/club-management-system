import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Basic Validation
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        // Simulate API Call
        setTimeout(() => {
            console.log(`Newsletter Subscription: ${email}`);
            setStatus('success');
            setMessage('Thanks for subscribing! We will keep you updated.');
            setEmail('');
        }, 1000);
    };

    return (
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 my-8">
            <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-blue-900">Join Our Community</h3>
                <p className="text-gray-600 mt-2 text-sm">Get the latest match results, event news, and club updates delivered to your inbox.</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (status === 'error') setStatus('idle');
                            }}
                            disabled={status === 'success'}
                            className={`w-full px-4 py-2.5 rounded-md border focus:ring-2 focus:outline-none transition-all
                    ${status === 'error'
                                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50'
                                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 bg-white'
                                }
                    disabled:bg-gray-100 disabled:text-gray-500
                `}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`
              flex items-center justify-center px-6 py-2.5 rounded-md font-medium text-white transition-all
              ${status === 'success' ? 'bg-green-600' : 'bg-blue-900 hover:bg-blue-800'}
              disabled:opacity-70 disabled:cursor-not-allowed
            `}
                    >
                        {status === 'loading' ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : status === 'success' ? (
                            <>
                                <CheckCircle size={18} className="mr-2" /> Subscribed
                            </>
                        ) : (
                            <>
                                Subscribe <Send size={16} className="ml-2" />
                            </>
                        )}
                    </button>
                </div>

                {/* Feedback Message */}
                {status !== 'idle' && message && (
                    <div className={`mt-3 text-sm flex items-center justify-center ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                        {status === 'error' && <AlertCircle size={16} className="mr-1.5" />}
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default NewsletterSignup;
