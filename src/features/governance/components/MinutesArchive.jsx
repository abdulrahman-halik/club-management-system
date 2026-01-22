import React, { useState } from 'react';
import { FileText, Download, Search, Filter, FolderOpen, Calendar } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const MinutesArchive = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('2025');

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

    const years = ['2025', '2024', '2023'];

    const filteredMinutes = minutesData.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesYear = selectedYear === 'All' || doc.year === selectedYear;
        return matchesSearch && matchesYear;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-blue-900 tracking-tight">Minutes Archive</h2>
                    <p className="text-gray-500">Official records of club meetings and decisions.</p>
                </div>
            </div>

            {/* Search and Filters Toolbar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Search size={18} />
                    </span>
                    <Input
                        placeholder="Search minutes..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap flex items-center gap-1">
                        <Filter size={16} /> Filter by Year:
                    </span>
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${selectedYear === year
                                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Documents List */}
            <div className="grid gap-4">
                {filteredMinutes.length > 0 ? (
                    filteredMinutes.map((doc) => (
                        <div key={doc.id} className="group bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-lg ${doc.type === 'AGM' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                        {doc.title}
                                    </h4>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {doc.date}
                                        </span>
                                        <span className="text-gray-300">|</span>
                                        <span className="uppercase text-xs font-bold tracking-wider">{doc.type}</span>
                                        <span className="text-gray-300">|</span>
                                        <span>{doc.size}</span>
                                    </div>
                                </div>
                            </div>

                            <Button variant="outline" size="sm" className="w-full sm:w-auto flex items-center justify-center gap-2 border-gray-200 text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200">
                                <Download size={16} />
                                <span className="sm:hidden lg:inline">Download PDF</span>
                            </Button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <FolderOpen size={48} className="mx-auto text-gray-300 mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">No documents found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinutesArchive;
