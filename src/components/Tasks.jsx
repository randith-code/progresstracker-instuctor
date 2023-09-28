import React from "react";
import Task from "./Task";
import { SearchBar, Sort } from "./SearchShortFilter";
import AddTaskButton from "./AddTaskButton";

const Tasks = () => {

    return(
        <div className="w-11/12 h-full flex flex-col items-center bg-white p-2 rounded-md">
            <div className="flex flex-col md:flex-row justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort/>
                <AddTaskButton/>
            </div>
            <div className="flex flex-col w-11/12 h-full p-2 gap-2 items-center bg-gray-100 rounded-md">
                <section className=" flex w-10/12 rounded-md">
                   <section className="w-2 rounded-l-md"></section>
                    <section className="flex flex-1 justify-around items-center py-2">
                        <h2>Title</h2>
                        <h2 className="hidden lg:block">Assigned Date</h2>
                        <h2 className="hidden lg:block">Due Date</h2>
                        <h2>Status</h2>
                    </section>
                </section>
                <section className="w-full max-h-60 md:max-h-96 overflow-y-scroll flex flex-col gap-2 items-center">
                    <Task
                        status = 'active' 
                        task='progressTraxker project'
                        startDate = '14.09.2023'
                        dueDate = '20.10.2023'
                        instructor='serverus snape'
                    />
                </section>
            </div>
        </div>
    )
}

export default Tasks