import React from 'react';
import { Package, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

// Simple Badge component if not available, but I'll assume standard UI components might need to affect imports.
// Actually, looking at file structure, `components/ui` exists. I should check what's in there.
// For now, I will use standard Tailwind classes for badges to be safe, mimicking shadcn.

const StatusBadge = ({ status }) => {
    switch (status) {
        case 'available':
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Available
                </span>
            );
        case 'in-use':
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Clock className="w-3 h-3 mr-1" />
                    In Use
                </span>
            );
        case 'maintenance':
        case 'damaged':
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Maintenance
                </span>
            );
        default:
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Unknown
                </span>
            );
    }
};

const AssetCard = ({ asset, onAction }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative h-48">
                {asset.image ? (
                    <img
                        src={asset.image}
                        alt={asset.name}
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        <Package size={48} />
                    </div>
                )}
                <div className="absolute top-2 right-2">
                    <StatusBadge status={asset.status} />
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 truncate" title={asset.name}>
                            {asset.name}
                        </h3>
                        <p className="text-sm text-gray-500">{asset.id}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                        <span className="font-medium">Condition:</span> {asset.condition}
                    </div>
                    <button
                        onClick={() => onAction(asset)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${asset.status === 'available'
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-amber-500 text-white hover:bg-amber-600'
                            }`}
                    >
                        {asset.status === 'available' ? 'Check Out' : 'Check In'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssetCard;
