import React, { useState } from 'react';
import { Plus, Calendar, MapPin, Edit2, Trash2 } from 'lucide-react';
import FixtureForm from '../../components/FixtureForm';

const MOCK_FIXTURES = [
    { id: 1, homeTeam: 'United CC 1st XI', opponent: 'City CC', date: '2025-05-10', time: '13:00', venue: 'Home', location: 'United Cricket Ground', type: 'League' },
    { id: 2, homeTeam: 'United CC 2nd XI', opponent: 'Rovers CC', date: '2025-05-10', time: '13:00', venue: 'Away', location: 'Rovers Sports Park', type: 'League' },
    { id: 3, homeTeam: 'Under 15s', opponent: 'West Side Youth', date: '2025-05-11', time: '09:30', venue: 'Home', location: 'United Cricket Ground', type: 'Cup' },
];

const FixtureManagementPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [fixtures, setFixtures] = useState(MOCK_FIXTURES);

    const handleCreateNew = () => {
        setEditingItem(null);
        setIsEditing(true);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure the match is cancelled or deleted?')) {
            setFixtures(prev => prev.filter(item => item.id !== id));
        }
    };

    const handleSave = (formData) => {
        if (editingItem) {
            setFixtures(prev => prev.map(item =>
                item.id === editingItem.id ? { ...item, ...formData } : item
            ));
        } else {
            const newItem = {
                id: Date.now(),
                ...formData
            };
            setFixtures(prev => [...prev, newItem].sort((a, b) => new Date(a.date) - new Date(b.date)));
        }
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div className="max-w-4xl mx-auto">
                <FixtureForm
                    initialData={editingItem}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Fixture Management</h1>
                    <p className="text-gray-500 text-sm">Schedule and manage upcoming matches.</p>
                </div>
                <button
                    onClick={handleCreateNew}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                >
                    <Plus className="w-5 h-5" />
                    Add Fixture
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {fixtures.map((fixture) => (
                    <div key={fixture.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${fixture.venue === 'Home' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                                    {fixture.venue.toUpperCase()}
                                </span>
                                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{fixture.type}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">
                                {fixture.homeTeam} <span className="text-gray-400 font-normal">vs</span> {fixture.opponent}
                            </h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    {fixture.date} at {fixture.time}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    {fixture.location}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => handleEdit(fixture)}
                                className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                title="Edit Match"
                            >
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleDelete(fixture.id)}
                                className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                                title="Delete Match"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}

                {fixtures.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        No fixtures scheduled.
                    </div>
                )}
            </div>
        </div>
    );
};

export default FixtureManagementPage;
