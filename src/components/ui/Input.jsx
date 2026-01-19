import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                id={inputId}
                className={`w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:bg-gray-50 disabled:text-gray-500 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''
                    } ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1.5 ml-1 text-sm text-red-600 font-medium">{error}</p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
