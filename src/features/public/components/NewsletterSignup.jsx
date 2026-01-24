import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSignup = () => {
    const signupSchema = z.object({
        email: z.string().email("Please enter a valid email address.")
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: { email: '' }
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const onSubmit = (data) => {
        setStatus('loading');
        // Simulate API Call
        setTimeout(() => {
            console.log(`Newsletter Subscription: ${data.email}`);
            setStatus('success');
            setMessage('Thanks for subscribing! We will keep you updated.');
            reset();
        }, 1000);
    };

    return (
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 my-8">
            <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-blue-900">Join Our Community</h3>
                <p className="text-gray-600 mt-2 text-sm">Get the latest match results, event news, and club updates delivered to your inbox.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto relative">
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            disabled={status === 'success'}
                            className={`w-full px-4 py-2.5 rounded-md border focus:ring-2 focus:outline-none transition-all
                    ${errors.email
                                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50'
                                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 bg-white'
                                }
                    disabled:bg-gray-100 disabled:text-gray-500
                `}
                            {...register('email')}
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
                {(status === 'success' || errors.email) && (
                    <div className={`mt-3 text-sm flex items-center justify-center ${errors.email ? 'text-red-600' : 'text-green-600'}`}>
                        {errors.email ? <><AlertCircle size={16} className="mr-1.5" />{errors.email.message}</> : status === 'success' && message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default NewsletterSignup;
