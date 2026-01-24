import React, { useState } from 'react';
import { Mail, MessageSquare, Send, LayoutTemplate } from 'lucide-react';

const BroadcastPage = () => {
    const [activeTab, setActiveTab] = useState('email'); // 'email' | 'sms'
    const [formData, setFormData] = useState({
        recipientGroup: 'All Members',
        subject: '',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        setIsSending(true);
        // Mock API call
        setTimeout(() => {
            setIsSending(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            setFormData({ ...formData, subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Communications Center</h1>
                    <p className="text-gray-500 text-sm">Send updates and announcements to club members.</p>
                </div>
            </div>

            <div className="flex gap-6 flex-col lg:flex-row">
                {/* Main Composer */}
                <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab('email')}
                            className={`flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'email' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Mail className="w-4 h-4" />
                            Email Broadcast
                        </button>
                        <button
                            onClick={() => setActiveTab('sms')}
                            className={`flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'sms' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            SMS Alert
                        </button>
                    </div>

                    <form onSubmit={handleSend} className="p-6 space-y-6">
                        {/* Audience Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                value={formData.recipientGroup}
                                onChange={(e) => setFormData({ ...formData, recipientGroup: e.target.value })}
                            >
                                <option>All Members (142)</option>
                                <option>Committee Only (12)</option>
                                <option>1st XI Squad (15)</option>
                                <option>Juniors & Parents (45)</option>
                            </select>
                        </div>

                        {activeTab === 'email' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject Line</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="e.g. Important: Weekend Fixtures Update"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {activeTab === 'email' ? 'Message Body' : 'Text Message (Max 160 chars)'}
                            </label>
                            <textarea
                                required
                                rows={activeTab === 'email' ? 12 : 4}
                                maxLength={activeTab === 'sms' ? 160 : undefined}
                                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-y"
                                placeholder="Type your message here..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            {activeTab === 'sms' && (
                                <div className="text-right text-xs text-gray-500 mt-1">
                                    {formData.message.length}/160 characters
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            {success && (
                                <div className="text-green-600 text-sm font-medium animate-pulse">
                                    Message sent successfully!
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`ml-auto px-6 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition-colors flex items-center gap-2 ${isSending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                            >
                                {isSending ? 'Sending...' : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Broadcast
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Templates Sidebar */}
                <div className="w-full lg:w-80 space-y-4">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <LayoutTemplate className="w-4 h-4" />
                            Quick Templates
                        </h3>
                        <div className="space-y-2">
                            {['Match Cancellation', 'Weekly Selection', 'Payment Reminder', 'Social Event'].map((template) => (
                                <button
                                    key={template}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, message: `[Template: ${template}] - Content would be pre-filled here.` })}
                                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors border border-transparent hover:border-gray-200"
                                >
                                    {template}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
                        <h4 className="text-sm font-semibold text-blue-800 mb-2">Usage Credits</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-blue-600">SMS Credits</span>
                                <span className="font-bold text-blue-900">450</span>
                            </div>
                            <div className="w-full bg-blue-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-3/4"></div>
                            </div>
                            <p className="text-xs text-blue-600 mt-2">
                                Plan renews on 1st of next month.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BroadcastPage;
