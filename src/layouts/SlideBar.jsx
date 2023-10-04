import React, { useState, useContext } from "react";
import {ReactComponent as Task} from '../assets/Task.svg'
import {ReactComponent as Intern} from '../assets/Intern.svg'
import {ReactComponent as User } from '../assets/user.svg'
import { NavLink } from "react-router-dom";
import internData from "../data/internData";
import InternContext from "../store/Intern/InternContext";


export const Tittle = (props) => {
    return(
        <div onClick={() => props.onClick()} className="w-10/12 border-b-2 flex justify-center border-gray-300 hover:border-blue-400 m-2">
            <div className="w-5/6 flex hover:bg-blue-50 justify-center pt-2">
                <span className="group w-5/6 flex gap-2 hover:text-blue-700">
                    {props.children}
                </span>
            </div>
        </div>
    )
}

const SlideBar = (props) => {

    const [visibility, setVisbility] = useState(false)
    const ctx = useContext(InternContext)

    return(
        <section className={`w-full sm:w-1/5 hidden sm:flex flex-col justify-center items-center bg-white drop-shadow-lg`}>
           <span className="w-full h-5/6 flex flex-col gap-2 items-center">
                <NavLink to='/' className='w-full' >
                    <span className="w-full">
                        <Tittle onClick={() => setVisbility(!visibility)} >
                            <Intern className="fill-slate-600 group-hover:fill-blue-700"/>
                            <h2 className="group-hover:text-blue-700">Interns</h2>
                        </Tittle>
                        { (visibility) ?
                            <div className="flex flex-col items-end">
                                {internData.map((user) => (
                                    <Tittle onClick={() => {ctx.changeUser(user)}} key={user.id}>
                                        <User className="fill-slate-600 group-hover:fill-blue-700"/>
                                        <h2 className="group-hover:text-blue-700">{user.name}</h2>
                                    </Tittle>
                                ))}
                            </div> : null
                        }
                    </span>
                </NavLink>
               
                <NavLink to='/diary' className='w-full'>
                    <Tittle onClick={() => setVisbility(false)}>
                        <Task className="fill-slate-600 group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">To Do</h2>
                    </Tittle>
                </NavLink>
           </span>
        </section>
    )
}

export default SlideBar

