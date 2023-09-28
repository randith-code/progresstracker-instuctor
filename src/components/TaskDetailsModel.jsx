import React from "react";
import {ReactComponent as Close} from '../assets/Close.svg'

const TaskDetailsModel = (props) => {
    return(
        <div onClick={(e) => {e.stopPropagation()}} className="bg-white z-20 flex flex-col items-center p-4 rounded-md w-fit">
            <span className="w-10/12 flex justify-end">
                <Close className='cursor-pointer' onClick={() => {props.setVisibility(false)}}/>
            </span>
            <table className="w-10/12 my-5">
               <tbody>
                <tr>
                        <td className="text-right">Title &nbsp;: &nbsp;</td>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Asigned Date &nbsp;: &nbsp;</td>
                        <td>{props.startDate}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Due Date &nbsp;: &nbsp;</td>
                        <td>{props.dueDate}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Instructor &nbsp;: &nbsp;</td>
                        <td>{props.instructor}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Materials or Reference links &nbsp;: &nbsp;</td>
                        <td></td>
                    </tr>
               </tbody>
            </table>
            <span className="w-10/12 flex justify-end">
                <button className="bg-blue-700 rounded-md py-1 px-3 text-white">Mark as done</button>
            </span>
        </div>
    )
}

export default TaskDetailsModel