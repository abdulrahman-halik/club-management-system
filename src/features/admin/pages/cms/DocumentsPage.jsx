import React, { useState } from 'react';
import { FileText, Download, Trash2, Upload, File } from 'lucide-react';

const MOCK_DOCUMENTS = [
    { id: 1, name: 'AGM Minutes 2024.pdf', type: 'Minutes', size: '2.4 MB', date: '2025-01-15' },
    { id: 2, name: 'Club Constitution v3.pdf', type: 'Policy', size: '1.1 MB', date: '2024-11-20' },
    { id: 3, name: 'Safeguarding Policy 2025.pdf', type: 'Policy', size: '850 KB', date: '2025-02-01' },
];

const DocumentsPage = () => {
    const [documents, setDocuments] = useState(MOCK_DOCUMENTS);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const newDoc = {
                id: Date.now(),
                name: file.name,
                type: 'General', // Default
                size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
                date: new Date().toISOString().split('T')[0],
            };
            setDocuments([newDoc, ...documents]);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this document?')) {
            setDocuments(documents.filter(d => d.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Document Management</h1>
                    <p className="text-gray-500 text-sm">Upload and manage committee minutes and club policies.</p>
                </div>
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium cursor-pointer">
                    <Upload className="w-5 h-5" />
                    Upload Document
                    <input type="file" className="hidden" onChange={handleUpload} accept=".pdf,.doc,.docx" />
                </label>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Document Name</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Size</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date Uploaded</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {documents.map((doc) => (
                            <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-gray-900">{doc.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {doc.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{doc.size}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{doc.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                                            <Download className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(doc.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {documents.length === 0 && (
                            <tr>
                                <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                                    No documents uploaded yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DocumentsPage;
