import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Annual Awards Night",
            date: "October 15, 2026",
            time: "7:00 PM",
            location: "Main Hall",
            description: "Celebrating our players' achievements this season.",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 2,
            title: "Community Cricket Clinic",
            date: "November 5, 2026",
            time: "9:00 AM",
            location: "United Sports Ground",
            description: "Free coaching session for junior players aged 8-12.",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 3,
            title: "End of Season BBQ",
            date: "December 10, 2026",
            time: "5:00 PM",
            location: "Clubhouse Patio",
            description: "Join us for food, drinks, and good company to wrap up the year.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <div className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Stay up to date with the latest happenings at United Cricket Club.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-blue-600 font-semibold mb-2">
                                    <Calendar size={16} className="mr-2" />
                                    {event.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-1" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin size={16} className="mr-1" />
                                        {event.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {events.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No upcoming events scheduled at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
