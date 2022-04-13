import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
// import { useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth';
// import auth from '../../../firebase.init';


const RequireAuth = ({ children }) => {
    const { authUser, loading } = useUser();
    const location = useLocation();

    // const [authUser, setauthUser] = useState({});
    console.log(authUser.email)

    // onAuthStateChanged(auth, user => {
    //     setauthUser(user)
    // })
    if (loading) {
        console.log('loading...')
        return <p>Loading...</p>
    }

    if (!authUser.accessToken) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;