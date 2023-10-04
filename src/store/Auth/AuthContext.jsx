import React from "react";

const AuthContext = React.createContext({
    currentUser: null,
    signup: (email, password) => {},
    login: (email, password) => {},
    logout: () => {}
})

export default AuthContext


