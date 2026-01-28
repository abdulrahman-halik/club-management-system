import React, { useState } from 'react';
import { FileText, Download, Search, Filter, FolderOpen, Calendar, ArrowRight } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const MinutesArchive = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('All');

    // Mock Data for Minutes
    const minutesData = [
        { id: 101, title: 'May Committee Meeting Minutes', date: '2025-05-02', type: 'Committee', year: '2025', size: '2.4 MB' },
        { id: 102, title: 'April Committee Meeting Minutes', date: '2025-04-05', type: 'Committee', year: '2025', size: '1.8 MB' },
        { id: 103, title: '2025 Annual General Meeting Minutes', date: '2025-03-15', type: 'AGM', year: '2025', size: '5.1 MB' },
        { id: 104, title: 'February Committee Meeting Minutes', date: '2025-02-08', type: 'Committee', year: '2025', size: '1.9 MB' },
        { id: 105, title: 'January Committee Meeting Minutes', date: '2025-01-10', type: 'Committee', year: '2025', size: '2.0 MB' },
        { id: 201, title: 'December Committee Meeting Minutes', date: '2024-12-05', type: 'Committee', year: '2024', size: '1.8 MB' },
        { id: 202, title: 'AGM 2024 Minutes', date: '2024-03-20', type: 'AGM', year: '2024', size: '4.5 MB' },
    ];

    const years = ['All', '2025', '2024', '2023'];

    const filteredMinutes = minutesData.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesYear = selectedYear === 'All' || doc.year === selectedYear;
        return matchesSearch && matchesYear;
    });

    const getBadgeVariant = (type) => {
        switch (type) {
            case 'AGM': return 'primary';
            case 'Committee': return 'secondary';
            default: return 'outline';
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-blue-900 tracking-tight">Minutes Archive</h2>
                    <p className="text-gray-500">Official records of club meetings and decisions.</p>
                </div>
            </div>

            {/* Search and Filters Toolbar */}
            <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-2 items-center justify-between">
                <div className="relative w-full md:max-w-md p-2">
                    <span className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search minutes..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-1 w-full md:w-auto overflow-x-auto p-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2 whitespace-nowrap">
                        Year:
                    </span>
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${selectedYear === year
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMinutes.length > 0 ? (
                    filteredMinutes.map((doc) => (
                        <div key={doc.id} className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full overflow-hidden">
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${doc.type === 'AGM' ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
                                        <FileText size={24} />
                                    </div>
                                    <Badge variant={getBadgeVariant(doc.type)} className="shadow-sm">{doc.year}</Badge>
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                                    {doc.title}
                                </h4>

                                <div className="mt-auto pt-4 flex items-center gap-3 text-xs font-medium text-gray-500">
                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                        <Calendar size={12} /> {doc.date}
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                        {doc.size}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 border-t border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                                <button className="w-full flex items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                                    <Download size={16} />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-16 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                            <FolderOpen size={40} className="text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No documents found</h3>
                        <p className="text-gray-500 mt-1">Try adjusting your search or selected year.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedYear('All'); }}
                            className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinutesArchive;
