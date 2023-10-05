import React from "react";

const AuthContext = React.createContext({
    currentUser: null,
    signup: (email, password) => {},
    login: (email, password) => {},
    logout: () => {},
    googleAuth: () => {},
    updateProfile: (name) => {}
})

export default AuthContext