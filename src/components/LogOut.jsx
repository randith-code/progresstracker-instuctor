import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
const LogOut = () => {

    const navigate = useNavigate()

    const onSucess = () => {
        console.log("Sucessfully logout!")
        localStorage.removeItem("user")
        navigate('/login')
    }

    return(
        <GoogleLogout
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="LogOut"
            onLogoutSuccess={onSucess} 
        />
    )
}

export default LogOut