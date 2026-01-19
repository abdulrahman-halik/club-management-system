import React from 'react';
import Badge from '../../../components/ui/Badge';
import {
    Fuel,
    User,
    Trophy,
    Hammer,
    Coffee,
    Briefcase,
    BadgeDollarSign,
    MoreHorizontal
} from 'lucide-react';

const getCategoryIcon = (category) => {
    const map = {
        'Maintenance': <Fuel size={18} />,
        'Umpiring': <User size={18} />,
        'Match Fees': <Trophy size={18} />,
        'Annual Subs': <BadgeDollarSign size={18} />,
        'Equipment': <Hammer size={18} />,
        'Catering': <Coffee size={18} />,
        'Sponsorship': <Briefcase size={18} />
    };
    return map[category] || <BadgeDollarSign size={18} />;
};

const TransactionTable = ({ transactions = [] }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="overflow-auto custom-scrollbar flex-grow">
                <table className="min-w-full divide-y divide-gray-50 text-left">
                    <thead className="bg-gray-50/80 backdrop-blur-sm sticky top-0 z-10">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[140px]">Date</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Amount</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[120px]">Status</th>
                            <th scope="col" className="px-6 py-4 w-[50px]"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-12 text-center text-sm text-gray-500 italic">
                                    No transactions found for the selected period.
                                </td>
                            </tr>
                        ) : (
                            transactions.map((tx) => (
                                <tr key={tx.id} className="group hover:bg-gray-50/50 transition-colors duration-150 ease-in-out cursor-default">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium font-mono">
                                        {new Date(tx.date).toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-3 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                                {getCategoryIcon(tx.category)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">{tx.description}</div>
                                                <div className="text-xs text-gray-500 md:hidden">{tx.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                                        {tx.category}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold text-right font-mono tracking-tight ${tx.type === 'debit' ? 'text-gray-900' : 'text-emerald-600'
                                        }`}>
                                        {tx.type === 'debit' ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Badge variant={
                                            tx.status === 'completed' ? 'success' :
                                                tx.status === 'pending' ? 'warning' : 'danger'
                                        } type="dot">
                                            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionTable;
