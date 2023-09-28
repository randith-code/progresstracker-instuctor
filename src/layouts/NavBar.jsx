import React, { useState } from "react";
import {ReactComponent as HambergerMenu} from '../assets/SlideBarToggle.svg'
import ProfileDetails from "../components/ProfileDetails";

const Profile= () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [isVisible, setIsVisible] = useState(false)

    return(
        <div className="flex flex-col">
            <img src={user ? user.imageUrl : ''} alt="profile" 
                className="w-8 sm:w-10 aspect-square rounded-full bg-slate-600 mx-3 cursor-pointer"
                onClick={() => setIsVisible(true)}
            />
            {(isVisible) ? <ProfileDetails setIsVisible={setIsVisible}/> : null}
        </div>
    )
}

const NavBar = (props) => {
    return(
       <div className="w-full flex justify-center bg-white py-1 drop-shadow-md ">
        <div className="w-11/12 flex h-fit justify-between items-center ">
            <span className="flex h-full items-center">
                <HambergerMenu onClick={() => {props.setOpen(!props.open)}} className="mx-2 w-6 aspect-square block sm:hidden"/>
                <h1 className="mx-2 text-blue-700 text-xl sm:text-3xl font-bold">progresstracker</h1>
            </span>
            <Profile/>
        </div>
       </div>
    )
}

export default NavBar