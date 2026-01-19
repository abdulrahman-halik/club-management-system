import React from 'react';

const Badge = ({ children, variant = 'default', className = '', type = 'pill' }) => {
    const variants = {
        default: "bg-gray-100 text-gray-700",
        success: "bg-emerald-100 text-emerald-700",
        warning: "bg-amber-100 text-amber-700",
        danger: "bg-red-100 text-red-700",
        blue: "bg-blue-100 text-blue-700",
    };

    const dotColors = {
        default: "bg-gray-400",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        blue: "bg-blue-500",
    };

    if (type === 'dot') {
        return (
            <span className={`inline-flex items-center text-sm font-medium ${className} ${variants[variant].split(' ')[1]}`}>
                <span className={`w-2 h-2 rounded-full mr-2 ${dotColors[variant]}`}></span>
                {children}
            </span>
        );
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
