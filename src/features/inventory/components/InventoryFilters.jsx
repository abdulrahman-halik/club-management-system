import React from 'react';
import { Search, Filter } from 'lucide-react';

const InventoryFilters = ({ activeCategory, onCategoryChange, onSearchChange }) => {
    const categories = [
        { id: 'all', label: 'All Items' },
        { id: 'kits', label: 'Match Kits' },
        { id: 'training', label: 'Training Gear' },
        { id: 'ground', label: 'Ground Equipment' },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            {/* Search */}
            <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search by name or ID..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            {/* Category Tabs/Dropdown */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryChange(cat.id)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default InventoryFilters;
