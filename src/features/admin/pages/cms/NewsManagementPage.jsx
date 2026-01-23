import React, { useState } from 'react';
import { Plus, Search, MoreVertical, Edit2, Trash2, Eye } from 'lucide-react';
import NewsEditor from '../../components/NewsEditor';

// Mock Data
const MOCK_NEWS = [
    { id: 1, title: 'Season Start Dates Confirmed', category: 'General', author: 'Club Sec', date: '2025-04-12', status: 'Published' },
    { id: 2, title: 'Junior Training Schedule Change', category: 'Juniors', author: 'Coach Mike', date: '2025-05-01', status: 'Draft' },
    { id: 3, title: 'Results: 1st XI vs Rivals', category: 'Match Report', author: 'Skipper', date: '2025-05-06', status: 'Published' },
];

const NewsManagementPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [newsItems, setNewsItems] = useState(MOCK_NEWS);

    const handleCreateNew = () => {
        setEditingItem(null);
        setIsEditing(true);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            setNewsItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const handleSave = (formData) => {
        if (editingItem) {
            // Update existing
            setNewsItems(prev => prev.map(item =>
                item.id === editingItem.id ? { ...item, ...formData } : item
            ));
        } else {
            // Create new
            const newItem = {
                id: Date.now(),
                ...formData,
                author: 'Current User', // Mock
                date: new Date().toISOString().split('T')[0],
                status: 'Published'
            };
            setNewsItems(prev => [newItem, ...prev]);
        }
        setIsEditing(false);
    };

    const filteredNews = newsItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isEditing) {
        return (
            <div className="max-w-4xl mx-auto">
                <NewsEditor
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
                    <h1 className="text-2xl font-bold text-gray-900">News & Announcements</h1>
                    <p className="text-gray-500 text-sm">Manage club news, match reports, and social updates.</p>
                </div>
                <button
                    onClick={handleCreateNew}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                >
                    <Plus className="w-5 h-5" />
                    New Article
                </button>
            </div>

            {/* Filters & Search */}
            <div className="flex gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="All">All Categories</option>
                    <option value="General">General</option>
                    <option value="Juniors">Juniors</option>
                </select>
            </div>

            {/* News List */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Author</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredNews.length > 0 ? (
                                filteredNews.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{item.title}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.author}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                        No news articles found. Time to create one!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewsManagementPage;
