import React from 'react';
import ExpenseClaimForm from '../components/ExpenseClaimForm';
import TransactionTable from '../components/TransactionTable';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpensesPage = () => {
    const recentClaims = [
        { id: 101, date: '2025-05-14', description: 'Fuel for Roller', category: 'Maintenance', amount: -45.00, type: 'debit', status: 'pending' },
        { id: 102, date: '2025-05-11', description: 'Umpire Fees - vs County CC', category: 'Umpiring', amount: -40.00, type: 'debit', status: 'completed' },
        { id: 103, date: '2025-05-09', description: 'Tea Supplies (Urn)', category: 'Catering', amount: -85.50, type: 'debit', status: 'completed' },
    ];

    const handleClaimSubmit = (data) => {
        console.log('Claim submitted:', data);
        alert('Expense claim submitted for approval!');
    };

    return (
        <div className="bg-gray-50/50 min-h-screen pb-12">
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col gap-2 mb-2">
                        <Link to="/admin/finance" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 w-fit px-3 py-1.5 rounded-full">
                            <ArrowLeft size={14} className="mr-1.5" />
                            Back to Dashboard
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Expenses & Claims</h1>
                        <p className="text-gray-500 max-w-2xl">Submit new expense claims for approval and track the status of your previous submissions.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Submission Form */}
                    <div className="lg:col-span-5 space-y-6">
                        <ExpenseClaimForm onSubmit={handleClaimSubmit} />

                        {/* Helpful Tip Card */}
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                                <Clock size={18} className="mr-2" />
                                Reimbursement Timeline
                            </h4>
                            <p className="text-sm text-blue-700/80">
                                Claims are usually processed within 5-7 working days. Please ensure you upload a clear photo of your receipt to avoid delays.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Recent Claims/History */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Recent Claims</h2>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">View All History</button>
                        </div>
                        <TransactionTable transactions={recentClaims} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensesPage;
