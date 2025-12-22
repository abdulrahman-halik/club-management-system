import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold text-xs">
                    Loading
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
