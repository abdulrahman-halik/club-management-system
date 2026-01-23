import React, { useState } from 'react';
import { Calendar, MapPin, Users, Save, X } from 'lucide-react';

const FixtureForm = ({ onSave, onCancel, initialData = null }) => {
    const [formData, setFormData] = useState({
        homeTeam: initialData?.homeTeam || 'United CC 1st XI',
        opponent: initialData?.opponent || '',
        venue: initialData?.venue || 'Home', // Home or Away
        location: initialData?.location || 'United Cricket Ground',
        date: initialData?.date || '',
        time: initialData?.time || '13:00',
        type: initialData?.type || 'League',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-semibold text-gray-800">
                    {initialData ? 'Edit Fixture' : 'Schedule New Fixture'}
                </h3>
                <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Teams */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Our Team</label>
                        <select
                            name="homeTeam"
                            value={formData.homeTeam}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                        >
                            <option value="United CC 1st XI">United CC 1st XI</option>
                            <option value="United CC 2nd XI">United CC 2nd XI</option>
                            <option value="United CC Sunday XI">United CC Sunday XI</option>
                            <option value="Under 15s">Under 15s</option>
                            <option value="Under 13s">Under 13s</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Opposition</label>
                        <input
                            type="text"
                            name="opponent"
                            required
                            value={formData.opponent}
                            onChange={handleChange}
                            placeholder="e.g. City Cricket Club"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Date & Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                        <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Venue Details */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Venue Type</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="venue"
                                    value="Home"
                                    checked={formData.venue === 'Home'}
                                    onChange={handleChange}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Home</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="venue"
                                    value="Away"
                                    checked={formData.venue === 'Away'}
                                    onChange={handleChange}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Away</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ground/Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                name="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Match Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Match Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                        >
                            <option value="League">League Match</option>
                            <option value="Cup">Cup Match</option>
                            <option value="Friendly">Friendly</option>
                            <option value="T20">T20</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors flex items-center gap-2"
                    >
                        <Save className="w-4 h-4" />
                        Save Fixture
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FixtureForm;
