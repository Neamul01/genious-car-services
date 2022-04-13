import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../../hooks/useUser';

const RequireAuth = ({ children }) => {
    const user = useUser();
    const location = useLocation();

    if (!user) {
        <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;