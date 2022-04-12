import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useFacebookSignIn = () => {
    const [fbError, setError] = useState('');

    const navigate = useNavigate();

    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(fbEerror => {
                setError(fbEerror)
            })
    }
    return {
        handleFacebookSignIn,
        fbError
    }
}
export default useFacebookSignIn;