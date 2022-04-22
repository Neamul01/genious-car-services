import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUser from '../../../hooks/useUser';


const RequireAuth = ({ children }) => {
    const { authUser, loading } = useUser();
    const location = useLocation();

    const handleEmailVarification = async () => {
        await sendEmailVerification(auth.currentUser).then(() => {
            alert('mail sent')
        })
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (!authUser.accessToken) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }

    if (authUser.providerData[0]?.providerId === 'password' && !authUser.emailVerified) {
        return <div>
            <h2 className="text-danger">Your Email is not varified</h2>
            <h5 className="text-success">Please varify your Email Address</h5>
            <button onClick={handleEmailVarification}>Send Again</button>
        </div>
    }

    return children;
};

export default RequireAuth;