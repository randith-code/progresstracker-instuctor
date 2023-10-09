import React,{useState} from "react"
import ModelOverlay from "./ModelOverlay"
import TaskDetailsModel from "./TaskDetailsModel"

const Task =(props) => {

    const [status, setStatus] = useState(props.status)
    let color = (status === 'active') ? 'bg-blue-700' : (status === 'overdue') ? 'bg-red-700' : 'bg-slate-600 '
    const [isVisible, setIsVisible] = useState(false)

    return(
        <>
            <div className="flex w-10/12 rounded-md bg-white drop-shadow-md"
                onClick={() => setIsVisible(true)}
            >
                <section className={`w-2 ${color} rounded-l-md`}></section>
                <section className="flex flex-1 justify-around items-center py-2">
                    <h2>{props.task}</h2>
                    <h2 className="hidden lg:block">{props.startDate}</h2>
                    <h2>{props.dueDate}</h2>
                    <h2 className="hidden lg:block">{props.instructor}</h2>
                </section>
            </div>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <TaskDetailsModel 
                    title={props.task} 
                    startDate={props.startDate} 
                    dueDate={props.dueDate} 
                    instructor={props.instructor}
                    links={props.links}
                    setVisibility={setIsVisible}
                />
            </ModelOverlay>
        </>
    )
}

export default Task