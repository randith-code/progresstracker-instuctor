import React,{useState} from "react";
// import { GoogleLogin } from "react-google-login"
import loginImage from '../assets/LoginImage.jpg'
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";

const Login = () => {

    const [haveAccount, setHaveAccount] = useState(true)

    return(
        <div className="w-screen h-screen flex flex-col sm:flex-row overflow-hidden">
            <section className="w-full sm:w-1/2 h-3/4 sm:h-full flex flex-col items-center">
                <span className="flex justify-start w-full">
                    <h1 className="mx-4 my-2 text-blue-700 text-xl sm:text-3xl font-bold">progresstracker</h1>
                </span>
                <img src={loginImage} alt="" />
            </section>
            <section className="w-full sm:w-1/2 h-3/4 sm:h-full grid place-items-center">
                {haveAccount ? <LoginCard setCard={setHaveAccount}/> : <SignupCard setCard={setHaveAccount}/>}                
            </section>
        </div>
    )
}

export default Login