import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../firebase.init'


const useGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })

        return error;
    }
    return handleGoogleSignIn;

}
export default useGoogleSignIn;
