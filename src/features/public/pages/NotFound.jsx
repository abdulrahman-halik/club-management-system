import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Oops! The page you are looking for seems to have gone for a six... out of the stadium!
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-club-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
