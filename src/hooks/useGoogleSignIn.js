import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'


const useGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })

        return error;
    }
    return handleGoogleSignIn;

}
export default useGoogleSignIn;
