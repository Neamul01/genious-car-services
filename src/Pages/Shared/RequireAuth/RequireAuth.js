import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../../hooks/useUser';


const RequireAuth = ({ children }) => {
    const { authUser, loading } = useUser();
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if (!authUser.accessToken) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;