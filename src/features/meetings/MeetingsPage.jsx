import React, { useState } from 'react';
import MeetingScheduler from './components/MeetingScheduler';
import MinutesArchive from './components/MinutesArchive';
import { Calendar, FileText, Landmark } from 'lucide-react';

const MeetingsPage = () => {
    const [activeTab, setActiveTab] = useState('meetings');

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Header Section */}
            <div className="bg-blue-900 text-white pt-10 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                            <Landmark size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">Club Governance</h1>
                            <p className="text-blue-100 mt-1 text-lg">Transparency, accountability, and member participation</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto max-w-6xl px-4 -mt-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px]">

                    {/* Tabs Navigation */}
                    <div className="flex flex-col sm:flex-row border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab('meetings')}
                            className={`flex-1 py-4 px-6 text-center font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all relative ${activeTab === 'meetings'
                                ? 'text-blue-600 bg-blue-50/50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <Calendar size={18} />
                            Upcoming Meetings
                            {activeTab === 'meetings' && (
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></span>
                            )}
                        </button>
                        <div className="w-px bg-gray-100 hidden sm:block"></div>
                        <button
                            onClick={() => setActiveTab('minutes')}
                            className={`flex-1 py-4 px-6 text-center font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all relative ${activeTab === 'minutes'
                                ? 'text-blue-600 bg-blue-50/50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <FileText size={18} />
                            Minutes Archive
                            {activeTab === 'minutes' && (
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></span>
                            )}
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-10">
                        <div className={`transition-opacity duration-300 ${activeTab === 'meetings' ? 'opacity-100' : 'hidden opacity-0'}`}>
                            {activeTab === 'meetings' && <MeetingScheduler />}
                        </div>
                        <div className={`transition-opacity duration-300 ${activeTab === 'minutes' ? 'opacity-100' : 'hidden opacity-0'}`}>
                            {activeTab === 'minutes' && <MinutesArchive />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingsPage;
