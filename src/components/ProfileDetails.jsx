import React from "react";
import ReactDOM from "react-dom";
import {ReactComponent as Close} from '../assets/Close.svg'
import {ReactComponent as Logout} from '../assets/Logout.svg'
import { useAuth } from "../store/Auth/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ProfileDetails = (props) => {

    const user = JSON.parse(localStorage.getItem("user"))
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        localStorage.removeItem("user")
        navigate('/login')
    }

    console.log(user)

    const Content = () => (
        <div className="absolute top-0 right-0 h-fit bg-white drop-shadow-md w-screen sm:w-25vw z-20 rounded-sm">
            <div className="w-full h-full flex flex-col items-center">
                <section className="w-11/12 flex items-center justify-around my-2 p-1 border-b border-gray-400">
                    <img src={user.photoURL ? user.photoURL : null} alt="profile" className="w-8 sm:w-10 aspect-square rounded-full mx-3" />
                    <p className="overflow-hidden">{user.displayName}</p>
                    <Close className="cursor-pointer p-1 rounded-sm hover:bg-gray-400" onClick={() => props.setIsVisible(false)}/>
                </section>
                <section className="w-11/12 flex-1 flex flex-col items-center my-4">
                    <button onClick={handleLogout} className="flex items-center gap-2">
                        <Logout/>
                        Logout
                    </button>
                </section>
            </div>
        </div>
    )

    return(
        <>
            {ReactDOM.createPortal(<Content/>, document.getElementById('model-root'))}
        </>
    )
}

export default ProfileDetails