import React from 'react';
import { Users, FileText, Calendar, TrendingUp } from 'lucide-react';

/**
 * Shared Metric Card Component
 */
// eslint-disable-next-line no-unused-vars
const MetricCard = ({ title, value, change, icon: Icon, colorClass }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
            <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <span className={`text-xs font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'} flex items-center gap-1 mt-1`}>
                    {change} <span className="text-gray-400 font-normal">from last month</span>
                </span>
            </div>
            <div className={`p-3 rounded-lg ${colorClass}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
        </div>
    </div>
);

const DashboardPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <div className="flex gap-2">
                    {/* Action buttons could go here */}
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title="Total Members"
                    value="142"
                    change="+12%"
                    icon={Users}
                    colorClass="bg-blue-500"
                />
                <MetricCard
                    title="Active News"
                    value="8"
                    change="+2"
                    icon={FileText}
                    colorClass="bg-purple-500"
                />
                <MetricCard
                    title="Upcoming Fixtures"
                    value="4"
                    change="+1"
                    icon={Calendar}
                    colorClass="bg-orange-500"
                />
                <MetricCard
                    title="Outstanding Fees"
                    value="£1,250"
                    change="-5%"
                    icon={TrendingUp}
                    colorClass="bg-emerald-500"
                />
            </div>

            {/* Recent Activity / Quick Actions Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Recent System Activity</h3>
                    <div className="space-y-4">
                        {/* Mock Activity List */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-800">New member registration: John Doe</p>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="flex flex-col gap-3">
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors">
                            + Create News Article
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors">
                            + Add New Fixture
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors">
                            + Broadcast Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
