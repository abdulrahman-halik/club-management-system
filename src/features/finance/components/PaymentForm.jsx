import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const PaymentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        memberId: '',
        amount: '',
        type: 'match_fee', // match_fee, annual_sub, donation
        date: new Date().toISOString().split('T')[0],
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <Card className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Record New Payment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="match_fee">Match Fee</option>
                        <option value="annual_sub">Annual Subscription</option>
                        <option value="donation">Donation</option>
                    </select>
                </div>

                <Input
                    label="Member ID / Name"
                    name="memberId"
                    value={formData.memberId}
                    onChange={handleChange}
                    placeholder="Enter member name"
                    required
                />

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

                <Input
                    label="Date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Notes (Optional)"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Check reference, etc."
                />

                <div className="pt-2">
                    <Button type="submit" className="w-full">
                        Record Payment
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default PaymentForm;
