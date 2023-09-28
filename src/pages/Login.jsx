import React from "react";
import { GoogleLogin } from "react-google-login"
import { useNavigate } from "react-router-dom";
import loginImage from '../assets/LoginImage.jpg'
const Login = () => {

    const navigate = useNavigate()

    const onSuccess = (res) => {
        localStorage.setItem("user", JSON.stringify(res.profileObj))
        navigate('/')
    }

    const onFailure = () => {
        console.log('login fail')
    }

    return(
        <div className="w-screen h-screen flex flex-col sm:flex-row overflow-hidden">
            <section className="w-full sm:w-1/2 h-3/4 sm:h-full flex flex-col items-center">
                <span className="flex justify-start w-full">
                    <h1 className="mx-4 my-2 text-blue-700 text-xl sm:text-3xl font-bold">progresstracker</h1>
                </span>
                <img src={loginImage} alt="" />
            </section>
            <section className="w-full sm:w-1/2 h-3/4 sm:h-full grid place-items-center">
               <span className="flex flex-col gap-8 bg-white drop-shadow-lg w-3/4 sm:w-1/2 p-5 rounded-md">
                <h1 className="text-xl text-blue-700 font-semibold">LogIn</h1>
                <p className="text-gray-700 text-sm">
                    Monitor your journey to enhance your career.
                </p>
                <span className="grid place-items-center w-full">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText="Login With Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure} 
                        cookiePolicy={'single_host_origin'} 
                        isSignedIn={true}
                    />
                </span>
               </span>
            </section>
        </div>
    )
}

export default Login