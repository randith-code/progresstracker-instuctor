import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null); // Change initial state to null

    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const haandleLogout = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

        return () => unsubscriber();
    }, [])

    const value ={
        currentUser: currentUser,
        signup: handleSignUp,
        login: handleLogIn,
        logout: haandleLogout
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
