import React, {useState} from "react";
import ModelOverlay from "./ModelOverlay";
import AddTaskModel from "./AddTaskModel";

const AddTaskButton = () => {

    const [isVisible, setIsVisible] = useState(false)

    return(
        <>
            <button 
                onClick={() => setIsVisible(true)}
                className="flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 px-3"
            >
                Add Task
            </button>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <AddTaskModel setVisibility={setIsVisible}/>
            </ModelOverlay>
        </>
    )
}

export default AddTaskButton