import React,{ useState, useEffect, useContext } from "react";
import Task from "./Task";
import { SearchBar, Sort } from "./SearchShortFilter";
import AddTaskButton from "./AddTaskButton";
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from "../firebase/firebaseConfig";
import InternContext from "../store/Intern/InternContext";
import { sortByField } from "./SearchShortFilter";



const Tasks = () => {

    const [internTasks, setInternTasks] = useState([])
    const tasksCollectionRef = collection(db, "tasks")
    const ctx = useContext(InternContext)
    const [value, setValue] = useState('ascending')
    const [sortedArray, setSortedArray] = useState([]);

    useEffect(() => {
        const gettasks = async() => {
            if(ctx.user != null){
                const q = query(tasksCollectionRef,where("assignTo", "==", ctx.user.name))
                const res = await getDocs(q)
                setInternTasks(res.docs.map((doc) => ({...doc.data(), id: doc.id})))
            }
        }

        gettasks()
    },[ctx.user])

    useEffect(() => {
        setSortedArray(sortByField(internTasks, "task", value))
    },[value,internTasks])


    return(
        <div className="w-11/12 h-full flex flex-col items-center bg-white p-2 rounded-md">
            <div className="flex flex-col md:flex-row justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort setValue={setValue} />
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
                    {sortedArray.map((task) => (
                        <Task
                        key={task.id}
                        status = {task.status} 
                        task={task.task}
                        startDate = {task.asignedDate}
                        dueDate = {task.dueDate} 
                        instructor={task.instructor}
                        links={task.links}
                    />
                    ))}
                    
                </section>
            </div>
        </div>
    )
}

export default Tasks