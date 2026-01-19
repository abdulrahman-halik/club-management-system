import React from 'react';
import Card from '../../../components/ui/Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, type = 'neutral', icon: Icon, trend }) => {
    const trendColor = trend?.startsWith('+') ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50';
    const TrendIcon = trend?.startsWith('+') ? ArrowUpRight : ArrowDownRight;

    const iconStyles = {
        positive: 'from-emerald-100 to-emerald-50 text-emerald-600',
        negative: 'from-rose-100 to-rose-50 text-rose-600',
        warning: 'from-amber-100 to-amber-50 text-amber-600',
        neutral: 'from-blue-100 to-blue-50 text-blue-600'
    };

    return (
        <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 !border-gray-100/60 !bg-gradient-to-br !from-white !to-gray-50/50">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
                    <p className="text-3xl font-bold text-gray-900 tracking-tight leading-none">{value}</p>
                </div>

                {Icon && (
                    <div className={`p-3 rounded-2xl bg-gradient-to-br shadow-inner ${iconStyles[type]}`}>
                        <Icon size={24} />
                    </div>
                )}
            </div>

            {trend && (
                <div className="mt-5 flex items-center justify-between">
                    <div className={`flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${trendColor}`}>
                        <TrendIcon size={14} className="mr-1" />
                        {trend}
                    </div>
                    <span className="text-xs font-medium text-gray-400">vs last month</span>
                </div>
            )}
        </Card>
    );
};

export default StatCard;
