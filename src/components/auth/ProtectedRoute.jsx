import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Mock Auth Hook
// In a real app, this would come from an AuthContext
const useAuth = () => {
    // Mock logged in user
    const user = {
        isAuthenticated: true, // Toggle this to test protection
        role: 'admin', // 'admin', 'editor', 'member'
    };
    return user;
};

const ProtectedRoute = ({ allowedRoles = [], children }) => {
    const { isAuthenticated, role } = useAuth();

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
