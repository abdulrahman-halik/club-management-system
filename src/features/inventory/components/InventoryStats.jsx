import React from 'react';
import { AlertTriangle, PackageCheck, Activity } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, value, subtext, icon: Icon, alert }) => (
    <div className={`bg-white rounded-xl shadow-sm border p-4 flex items-start space-x-4 ${alert ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
        <div className={`p-3 rounded-lg ${alert ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
            <Icon size={24} />
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
            {subtext && <p className={`text-xs mt-1 ${alert ? 'text-red-600 font-medium' : 'text-gray-400'}`}>{subtext}</p>}
        </div>
    </div>
);

const InventoryStats = ({ stats }) => {
    // Mock stats if not provided
    const data = stats || {
        totalItems: 124,
        checkedOut: 12,
        lowStock: 2, // e.g. Match Balls
        maintenance: 3
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
                title="Total Assets"
                value={data.totalItems}
                subtext="Across all categories"
                icon={PackageCheck}
            />
            <StatCard
                title="In Use"
                value={data.checkedOut}
                subtext="Currently assigned"
                icon={Activity}
            />
            <StatCard
                title="Low Stock"
                value={data.lowStock}
                subtext="Restock required likely"
                icon={AlertTriangle}
                alert={data.lowStock > 0}
            />
            <StatCard
                title="Maintenance"
                value={data.maintenance}
                subtext="Items needing repair"
                icon={Activity} // Reusing Activity or maybe Wrench
            />
        </div>
    );
};

export default InventoryStats;
