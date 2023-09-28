import React from "react";
import { ReactComponent as Close } from '../assets/Close.svg'

const AddTaskModel = (props) => {
    return(
        <div className="flex flex-col items-center bg-white gap-4 rounded-md drop-shadow-md p-5" onClick={(e) => e.stopPropagation()}>
            <span className="flex justify-end w-full">
                <Close onClick={() => props.setVisibility(false)} className="cursor-pointer" />
            </span>
            <form className="grid grid-cols-1by3 items-center gap-6" action="">
                <label htmlFor="taskTittle">
                    Tittle : &nbsp;
                </label>
                <input className="outline-none border border-gray-500 rounded-sm" type="text" />
                <label htmlFor="dueDate">
                    Due Date : &nbsp;
                </label>
                <input className="outline-none border border-gray-500 rounded-sm" type="datetime-local" />
                <label htmlFor="links" className="justify-start">
                    Materials or reference links : &nbsp;
                </label>
                <textarea className="outline-none border border-gray-500 rounded-sm" name="links" id="links" cols="30" rows="10"></textarea>
                <span className="col-span-2 flex justify-end gap-4 ">
                    <button className="text-blue-700 rounded-md border border-blue-700 px-3" type="reset">Clear</button>
                    <button  className="text-white bg-blue-700 rounded-md px-3" type="submit">Add Task</button>
                </span>
            </form>
        </div>
    )
}

export default AddTaskModel