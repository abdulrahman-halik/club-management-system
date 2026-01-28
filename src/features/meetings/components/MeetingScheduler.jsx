import React from 'react';
import { Calendar, Clock, MapPin, Video, FileText, ChevronRight } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const MeetingScheduler = () => {
    // Mock Data for Meetings
    const upcomingMeetings = [
        {
            id: 1,
            title: 'Annual General Meeting (AGM) 2026',
            date: '2026-03-15',
            time: '14:00 - 16:30',
            location: 'Clubhouse Main Hall',
            type: 'AGM',
            isVirtual: false,
            agenda: ['Financial Report 2025', 'Election of Officers', 'Club Development Plan'],
        },
        {
            id: 2,
            title: 'Monthly Committee Meeting',
            date: '2026-02-05',
            time: '19:00 - 20:30',
            location: 'Zoom (Link sent via email)',
            type: 'Committee',
            isVirtual: true,
            agenda: ['Upcoming Fixtures', 'Ground Maintenance Update', 'New Member Applications'],
        },
        {
            id: 3,
            title: 'Extraordinary General Meeting',
            date: '2026-04-10',
            time: '18:00 - 19:00',
            location: 'Clubhouse Meeting Room',
            type: 'EGM',
            isVirtual: false,
            agenda: ['Constitution Amendment Proposal'],
        },
    ];



    // Helper to get badge variety based on type
    const getBadgeVariant = (type) => {
        switch (type) {
            case 'AGM': return 'primary'; // Important
            case 'Committee': return 'secondary';
            case 'EGM': return 'destructive'; // Urgent/Critical
            default: return 'outline';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-blue-900 tracking-tight">Upcoming Meetings</h2>
                    <p className="text-gray-500">Schedule of general and committee gatherings.</p>
                </div>
                {/* Potentially add filters here in future */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {upcomingMeetings.map((meeting) => (
                    <Card key={meeting.id} className="hover:shadow-md transition-shadow duration-300 border-l-4 border-l-blue-500 overflow-hidden flex flex-col h-full">
                        <div className="p-4 sm:p-5 space-y-4 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <Badge variant={getBadgeVariant(meeting.type)} className="text-xs">{meeting.type}</Badge>
                                        {meeting.isVirtual && (
                                            <span className="flex items-center text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 whitespace-nowrap">
                                                <Video size={12} className="mr-1" /> Virtual
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug break-words">{meeting.title}</h3>
                                </div>
                                <div className="text-center bg-blue-50 p-2 rounded-lg min-w-[3.5rem] border border-blue-100 shrink-0">
                                    <span className="block text-[10px] sm:text-xs font-bold text-blue-800 uppercase">{new Date(meeting.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="block text-xl sm:text-2xl font-bold text-blue-600 leading-none mt-0.5">{new Date(meeting.date).getDate()}</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-gray-400 shrink-0" />
                                    <span>{meeting.time}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPin size={16} className="text-gray-400 shrink-0 mt-0.5" />
                                    <span className="break-words">{meeting.location}</span>
                                </div>
                            </div>

                            {/* Agenda Preview */}
                            <div className="bg-gray-50 rounded-lg p-3 flex-grow">
                                <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                                    <FileText size={14} className="shrink-0" />
                                    <span>Agenda Highlights:</span>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-1">
                                    {meeting.agenda.map((item, idx) => (
                                        <li key={idx} className="line-clamp-1 break-all mx-1">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action */}
                            <div className="pt-2 mt-auto">
                                <button className="w-full flex items-center justify-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 sm:py-2 rounded-lg transition-colors group border border-transparent hover:border-blue-100 active:bg-blue-100">
                                    View Full Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Placeholder for no meetings or 'View All' calendar link */}
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 text-gray-400 text-center min-h-[200px] hover:border-blue-200 hover:bg-blue-50/10 transition-colors cursor-pointer group">
                    <div className="group-hover:scale-105 transition-transform duration-300">
                        <Calendar size={48} className="mx-auto mb-3 opacity-50 group-hover:text-blue-400 group-hover:opacity-100 transition-all" />
                        <p className="font-medium text-gray-500 group-hover:text-blue-600">Subscribe to Calendar</p>
                        <p className="text-xs mt-1 max-w-[200px] mx-auto">Add club events to your personal calendar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingScheduler;
