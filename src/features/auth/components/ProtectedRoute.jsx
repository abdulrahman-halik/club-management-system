import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles = [], children }) => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const role = user?.role;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
        // User is logged in but doesn't have permission
        return <Navigate to="/" replace />; // Or to an unauthorized page
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
