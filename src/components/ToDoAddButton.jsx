import React, {useState} from "react";
import AddToDoModel from "./AddToDoModel";
import ModelOverlay from "./ModelOverlay";

const ToDoAddButton = (props) => {

    const [isVisible, setIsVisible] = useState(false)
    return(
        <>
            <button
                className="group flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 px-3"
                onClick={() => setIsVisible(true)}
            >
                Add
            </button>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <AddToDoModel setUpdate={props.setUpdate} setVisibility={setIsVisible}/>
            </ModelOverlay>
        </>
    )
}

export default ToDoAddButton