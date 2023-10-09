import React, {useRef} from "react";
import { db } from '../firebase/firebaseConfig'
import { collection,addDoc } from 'firebase/firestore'

const AddToDoModel = (props) => {

    const todoCollectionRef = collection(db, "todos")
    const ttRef = useRef()
    const dateRef = useRef()
    const user = JSON.parse(localStorage.getItem("user"))

    const handleSubmit = async(e) => {

        e.preventDefault()

        const newTodo = {
            owner: user.displayName,
            title: ttRef.current.value,
            date: new Date(dateRef.current.value).toLocaleDateString()
        }

        const res = await addDoc(todoCollectionRef, newTodo)
        if(res){
            props.setVisibility(false)
        }
    }

    return(
        <div 
            onClick={(e) => {e.stopPropagation()}}
            className="w-1/2 bg-white drop-shadow-md rounded-md flex flex-col items-center p-4" 
        >
            <h2 className="text-2xl my-2">Create task</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 w-10/12 m-2">
                <label htmlFor="taskTittle">
                    Task Title :&nbsp;
                    <input ref={ttRef} className="outline-none border border-gray-600 rounded-sm my-1 w-1/2 px-2" type="text" /> 
                </label>
                <label htmlFor="date">
                    Date :&nbsp; 
                    <input ref={dateRef} className="outline-none border border-gray-600 rounded-sm my-1 w-1/2 px-2" type="datetime-local" />
                </label>
                <span className="flex justify-end">
                    <button
                        className="group flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 px-3"
                        type="submit"
                        onClick={() => props.setUpdate()}
                    >
                        Add
                    </button>
                </span>
            </form>
        </div>
    )
}

export default AddToDoModel