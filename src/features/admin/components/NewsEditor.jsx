import React, { useState } from 'react';
import { Save, Image as ImageIcon, X } from 'lucide-react';

const NewsEditor = ({ onSave, onCancel, initialData = null }) => {
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        content: initialData?.content || '',
        category: initialData?.category || 'General',
    });
    const [imagePreview, setImagePreview] = useState(initialData?.imageUrl || null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a fake local URL for preview
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, imageUrl: imagePreview });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-semibold text-gray-800">
                    {initialData ? 'Edit News Article' : 'Create New Article'}
                </h3>
                <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Title Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Article Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="e.g., Annual General Meeting 2024"
                    />
                </div>

                {/* Category & Image Upload Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                        >
                            <option value="General">General News</option>
                            <option value="Match Report">Match Report</option>
                            <option value="Social">Social Event</option>
                            <option value="Junior">Juniors</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Feature Image</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center justify-center px-4 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                <ImageIcon className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="text-sm text-gray-600">Upload Image</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                            {imagePreview && (
                                <div className="h-10 w-16 bg-gray-100 rounded overflow-hidden border border-gray-200">
                                    <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Editor area */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                        {/* Toolbar Fake */}
                        <div className="bg-gray-50 border-b border-gray-300 px-3 py-2 flex gap-2 text-gray-600">
                            <button type="button" className="p-1 hover:bg-gray-200 rounded font-bold text-xs">B</button>
                            <button type="button" className="p-1 hover:bg-gray-200 rounded italic text-xs">I</button>
                            <button type="button" className="p-1 hover:bg-gray-200 rounded underline text-xs">U</button>
                            <div className="w-px h-4 bg-gray-300 mx-1 self-center"></div>
                            <button type="button" className="p-1 hover:bg-gray-200 rounded text-xs">H1</button>
                            <button type="button" className="p-1 hover:bg-gray-200 rounded text-xs">H2</button>
                            <button type="button" className="p-1 hover:bg-gray-200 rounded text-xs">Link</button>
                        </div>
                        <textarea
                            name="content"
                            required
                            rows={12}
                            value={formData.content}
                            onChange={handleChange}
                            className="w-full p-4 outline-none resize-y text-gray-700 leading-relaxed font-sans"
                            placeholder="Write your article content here..."
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
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
                        {initialData ? 'Update Article' : 'Publish Article'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsEditor;
