import React, { useRef, useContext } from "react";
import { ReactComponent as Close } from '../assets/Close.svg'
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import InternContext from "../store/Intern/InternContext";

const AddTaskModel = (props) => {

    const tittleRef = useRef()
    const dueDateRef = useRef()
    const linksRef = useRef()
    const tasksCollectionRef = collection(db, "tasks")
    const user = JSON.parse(localStorage.getItem("user"))
    const ctx = useContext(InternContext)

    const addTask = async(e) => {

        e.preventDefault()

        const newTask = {
            instructor : user.displayName,
            assignTo: ctx.user.name,
            task: tittleRef.current.value,
            asignedDate : new Date().toLocaleDateString(),
            dueDate: new Date(dueDateRef.current.value).toLocaleDateString(),
            links: linksRef.current.value,
            status: 'active'
        }

        const res = await addDoc(tasksCollectionRef, newTask)

        if(res){
            props.setVisibility(false)
        }

    }

    return(
        <div className="flex flex-col items-center bg-white gap-4 rounded-md drop-shadow-md p-5" onClick={(e) => e.stopPropagation()}>
            <span className="flex justify-end w-full">
                <Close onClick={() => props.setVisibility(false)} className="cursor-pointer" />
            </span>
            <form onSubmit={addTask} className="grid grid-cols-1by3 items-center gap-6" action="">
                <label htmlFor="taskTittle">
                    Tittle : &nbsp;
                </label>
                <input ref={tittleRef} id="taskTittle" className="outline-none border border-gray-500 rounded-sm px-2" type="text" />
                <label htmlFor="dueDate">
                    Due Date : &nbsp;
                </label>
                <input ref={dueDateRef} id="dueDate" className="outline-none border border-gray-500 rounded-sm px-2" type="datetime-local" />
                <label htmlFor="links" className="justify-start">
                    Materials or reference links : &nbsp;
                </label>
                <textarea ref={linksRef} className="outline-none border border-gray-500 rounded-sm px-2" name="links" id="links" cols="30" rows="10"></textarea>
                <span className="col-span-2 flex justify-end gap-4 ">
                    <button className="text-blue-700 rounded-md border border-blue-700 px-3" type="reset">Clear</button>
                    <button  className="text-white bg-blue-700 rounded-md px-3" type="submit">Add Task</button>
                </span>
            </form>
        </div>
    )
}

export default AddTaskModel