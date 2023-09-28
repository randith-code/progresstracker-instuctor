import React from "react";

const AddToDoModel = () => {

    const handleSubmit = () => {

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
                    <input className="outline-none border border-gray-600 rounded-sm my-1 w-1/2" type="text" /> 
                </label>
                <label htmlFor="date">
                    Date :&nbsp; 
                    <input className="outline-none border border-gray-600 rounded-sm my-1 w-1/2" type="datetime-local" />
                </label>
                <span className="flex justify-end">
                    <button
                        className="group flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 px-3"
                    >
                        Add
                    </button>
                </span>
            </form>
        </div>
    )
}

export default AddToDoModel