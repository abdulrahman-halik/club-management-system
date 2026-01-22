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

    // Helper to format date
    const formatDate = (dateString) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {upcomingMeetings.map((meeting) => (
                    <Card key={meeting.id} className="hover:shadow-md transition-shadow duration-300 border-l-4 border-l-blue-500 overflow-hidden">
                        <div className="p-5 space-y-4">
                            {/* Header */}
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Badge variant={getBadgeVariant(meeting.type)}>{meeting.type}</Badge>
                                        {meeting.isVirtual && (
                                            <span className="flex items-center text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                                                <Video size={12} className="mr-1" /> Virtual
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 leading-tight">{meeting.title}</h3>
                                </div>
                                <div className="text-center bg-blue-50 p-2 rounded-lg min-w-[3.5rem] border border-blue-100">
                                    <span className="block text-xs font-bold text-blue-800 uppercase">{new Date(meeting.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="block text-2xl font-bold text-blue-600">{new Date(meeting.date).getDate()}</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-gray-400" />
                                    <span>{meeting.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-gray-400" />
                                    <span>{meeting.location}</span>
                                </div>
                            </div>

                            {/* Agenda Preview */}
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                                    <FileText size={14} />
                                    <span>Agenda Highlights:</span>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-1">
                                    {meeting.agenda.map((item, idx) => (
                                        <li key={idx} className="line-clamp-1">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action */}
                            <div className="pt-2">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors group">
                                    View Full Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Placeholder for no meetings or 'View All' calendar link */}
                <div className="flex items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 text-gray-400 text-center min-h-[200px]">
                    <div>
                        <Calendar size={48} className="mx-auto mb-2 opacity-50" />
                        <p className="font-medium">Subscribe to Calendar</p>
                        <p className="text-xs mt-1">Add club events to your personal calendar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingScheduler;
