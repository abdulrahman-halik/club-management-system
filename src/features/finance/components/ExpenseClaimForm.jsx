import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Upload, X } from 'lucide-react';

const ExpenseClaimForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        description: '',
        category: 'maintenance',
        amount: '',
        date: new Date().toISOString().split('T')[0],
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const removeFile = () => setFile(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ ...formData, file });
        }
    };

    return (
        <Card className="max-w-2xl mx-auto !p-8 !rounded-3xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Submit Expense Claim</h3>
                <p className="text-gray-500 text-sm mt-1">Fill in the details below to request reimbursement.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                    <Input
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="e.g. Grass seeds for new square"
                        required
                        className="w-full"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Category</label>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 cursor-pointer"
                                >
                                    <option value="maintenance">Ground Maintenance</option>
                                    <option value="equipment">Equipment</option>
                                    <option value="umpiring">Umpire Fees</option>
                                    <option value="catering">Teas / Catering</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <Input
                            label="Date Incurred"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Input
                        label="Amount"
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Receipt Upload</label>
                    {!file ? (
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/30 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <div className="p-3 bg-white rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform">
                                    <Upload className="w-6 h-6 text-blue-500" />
                                </div>
                                <p className="mb-1 text-sm text-gray-500 font-medium">Click to upload receipt</p>
                                <p className="text-xs text-gray-400">PNG, JPG or PDF (MAX. 5MB)</p>
                            </div>
                            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
                        </label>
                    ) : (
                        <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <Upload className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700 truncate max-w-[200px]">{file.name}</p>
                                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <button type="button" onClick={removeFile} className="p-1 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-red-500">
                                <X size={18} />
                            </button>
                        </div>
                    )}
                </div>

                <div className="pt-2">
                    <Button type="submit" className="w-full py-3 text-base shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform">
                        Submit Expense Claim
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ExpenseClaimForm;
