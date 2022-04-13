import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import auth from "../firebase.init"

const useUser = () => {
    const [authUser, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unSubscribe;
    }, [])


    return { authUser, loading };
}
export default useUser;