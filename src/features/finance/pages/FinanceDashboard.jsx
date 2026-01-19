import React from 'react';
import StatCard from '../components/StatCard';
import TransactionTable from '../components/TransactionTable';
import Button from '../../../components/ui/Button';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Download, Plus, Filter } from 'lucide-react';

const FinanceDashboard = () => {
    // Mock Data
    const stats = [
        { title: 'Total Revenue', value: '$12,450.00', trend: '+12.5%', type: 'positive', icon: DollarSign },
        { title: 'Total Expenses', value: '$4,200.00', trend: '-2.4%', type: 'negative', icon: TrendingDown },
        { title: 'Net Balance', value: '$8,250.00', trend: '+5.2%', type: 'neutral', icon: TrendingUp },
        { title: 'Pending Dues', value: '$1,200.00', trend: '8 Members', type: 'warning', icon: CreditCard },
    ];

    const recentTransactions = [
        { id: 1, date: '2025-05-15', description: 'Match Fees - Senior Team', category: 'Match Fees', amount: 250.00, type: 'credit', status: 'completed' },
        { id: 6, date: '2025-05-15', description: 'Match Fees - Junior Team', category: 'Match Fees', amount: 180.00, type: 'credit', status: 'completed' },
        { id: 2, date: '2025-05-14', description: 'Ground Maintenance - Mowing', category: 'Maintenance', amount: -150.00, type: 'debit', status: 'completed' },
        { id: 3, date: '2025-05-12', description: 'Annual Sub - John Doe', category: 'Annual Subs', amount: 120.00, type: 'credit', status: 'completed' },
        { id: 4, date: '2025-05-10', description: 'New Match Balls (Box of 6)', category: 'Equipment', amount: -180.00, type: 'debit', status: 'pending' },
        { id: 5, date: '2025-05-08', description: 'Sponsorship - TechCorp', category: 'Sponsorship', amount: 1000.00, type: 'credit', status: 'completed' },
    ];

    return (
        <div className="bg-gray-50/30 min-h-screen font-sans text-gray-900">
            {/* Page Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="container mx-auto px-4 lg:px-6 py-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-600/20">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tight text-gray-900">Finance Overview</h1>
                                <p className="text-sm text-gray-500 font-medium">Club financial health and records</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Button variant="outline" className="flex-1 md:flex-none justify-center gap-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-medium">
                                <Download size={16} />
                                Export
                            </Button>
                            <Button variant="primary" className="flex-1 md:flex-none justify-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 font-medium">
                                <Plus size={16} />
                                New Transaction
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 lg:px-6 py-8 max-w-7xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Transactions Section */}
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            Recent Transactions
                            <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
                                {recentTransactions.length}
                            </span>
                        </h2>

                        <div className="flex items-center bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                            <button className="px-3 py-1.5 text-xs font-semibold rounded-md bg-gray-100 text-gray-900 shadow-sm">All</button>
                            <button className="px-3 py-1.5 text-xs font-semibold rounded-md text-gray-500 hover:bg-gray-50">Income</button>
                            <button className="px-3 py-1.5 text-xs font-semibold rounded-md text-gray-500 hover:bg-gray-50">Expenses</button>
                            <div className="w-px h-4 bg-gray-200 mx-1"></div>
                            <button className="px-2 py-1.5 text-gray-400 hover:text-gray-700">
                                <Filter size={14} />
                            </button>
                        </div>
                    </div>

                    <TransactionTable transactions={recentTransactions} />

                    <div className="flex justify-center mt-6">
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                            View Full Ledger &rarr;
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FinanceDashboard;
