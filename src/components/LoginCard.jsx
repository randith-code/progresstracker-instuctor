import React, { useRef, useState } from "react";
import { useAuth } from "../store/Auth/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Google} from '../assets/Google.svg'

const LoginCard = (props) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { login, googleAuth } = useAuth()

    const handleLogIn = async(e) => {
        e.preventDefault()

        try{
            const userCredentials = await login(emailRef.current.value, passwordRef.current.value)
            console.log(JSON.stringify(userCredentials))

            if(userCredentials){
                navigate('/')
            }
        }
        catch{
            setError('Something went wrong, loginfailed...!')
        }

    }

    const handleGoogleSignIn = async() => {
        const result = await googleAuth()
        if(result){
            navigate('/')
        }
    } 

    return(
        <span className="flex flex-col gap-8 bg-white drop-shadow-lg w-3/4 sm:w-1/2 p-5 rounded-md">
            <h1 className="text-xl text-blue-700 font-semibold">LogIn</h1>
            <p className="text-gray-700 text-sm">
                Help others to build up their career.
            </p>
            {error ? <p className="text-center text-xs text-red-600">{error}</p> : null}
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
            </form>
            <span>
                <p className="text-center">Or</p>
                <button onClick={handleGoogleSignIn} className="flex items-center justify-around w-full rounded-md bg-white drop-shadow-md">
                    <Google className='w-8 aspect-square'/>
                    SignIn with Google
                </button>
                <hr className="my-2"/>
                <p className="text-center text-sm">
                    Don't have an account? 
                    <span onClick={() => props.setCard(false)} className="text-blue-700 cursor-pointer">
                        Sign Up
                    </span>
                </p>
            </span>
        </span>
    )
}

export default LoginCard