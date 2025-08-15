import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem("access");
    const role = localStorage.getItem("role");

    // If no token → redirect to login
    if (!token) {
        return <Navigate to="/" replace />;
    }

    // If role not allowed → redirect to dashboard
    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default ProtectedRoute;
