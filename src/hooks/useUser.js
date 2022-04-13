import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import auth from "../firebase.init"

const useUser = () => {
    const [authUser, setUser] = useState('');

    onAuthStateChanged(auth, user => {
        setUser(user)
    })

    return authUser;
}
export default useUser;