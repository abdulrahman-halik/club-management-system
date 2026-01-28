import React from 'react';
import { AlertCircle, XCircle, CheckCircle, Info } from 'lucide-react';

const icons = {
    error: XCircle,
    warning: AlertCircle,
    success: CheckCircle,
    info: Info
};

const styles = {
    error: 'bg-red-50 text-red-700 border-red-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200'
};

const Alert = ({ type = 'error', message, className = '' }) => {
    const Icon = icons[type];
    const style = styles[type];

    if (!message) return null;

    return (
        <div className={`flex items-start p-4 rounded-lg border ${style} ${className}`}>
            <div className="flex-shrink-0">
                <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="ml-3">
                <h3 className="text-sm font-medium">{message}</h3>
            </div>
        </div>
    );
};

export default Alert;
