import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebaseConfig";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup,
    updateProfile
} from 'firebase/auth'

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const provider = new GoogleAuthProvider() 

    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogout = () =>{
        return signOut(auth)
    }

    const handleSignInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const handleUpdateProfile = (name) => {
        return updateProfile(auth.currentUser,{
            displayName: name
        })
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            localStorage.setItem("user", JSON.stringify(user))
        })

        return () => unsubscriber();
    }, [])

    const value ={
        currentUser: currentUser,
        signup: handleSignUp,
        login: handleLogIn,
        logout: handleLogout,
        googleAuth : handleSignInWithGoogle,
        updateProfile: handleUpdateProfile
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
