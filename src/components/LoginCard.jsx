import React, { useRef } from "react";
import { useAuth } from "../store/Auth/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const LoginCard = (props) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogIn = (e) => {
        e.preventDefault()

        try{
            const userCredentials = login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }
        catch{
            console.log('Logging field')
        }
        const userCredentials = login(emailRef.current.value, passwordRef.current.value)

        console.log(userCredentials)
    }

    return(
        <span className="flex flex-col gap-8 bg-white drop-shadow-lg w-3/4 sm:w-1/2 p-5 rounded-md">
            <h1 className="text-xl text-blue-700 font-semibold">LogIn</h1>
            <p className="text-gray-700 text-sm">
                Help others to build up their career.
            </p>
            <form onSubmit={handleLogIn} className="flex flex-col" action="">
                <label className="flex flex-col py-2" htmlFor="email">
                    Email
                    <input ref={emailRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" name="email" type="email" />
                </label>
    
                <label className="flex flex-col py-2" htmlFor="password">
                    Password
                    <input ref={passwordRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" type="password" name="password" />
                </label>
                <button className="bg-blue-700 text-white rounded-md py-2 my-2">Login</button>
                <p className="text-blue-700 text-sm text-center cursor-pointer">Forgot your password?</p>
                <hr className="my-2"/>
                <p className="text-center text-sm">Don't have an account? <span onClick={() => props.setCard(false)} className="text-blue-700 cursor-pointer">Sign Up</span></p>
            </form>
        </span>
    )
}

export default LoginCard