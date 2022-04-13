import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useFacebookSignIn = () => {
    const [fbError, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
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