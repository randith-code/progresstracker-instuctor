import React from "react";

const DocumentThreadModel = (props) => {

    return(
        <div onClick={(e) => {e.stopPropagation()}} className="bg-white z-20 flex flex-col items-center p-4 rounded-md w-fit">
            <table>
                <tbody>
                    <tr>
                        <td>Tittle : </td>
                        <td>{props.tittle}</td>
                    </tr>
                    <tr>
                        <td>Date : </td>
                        <td>{props.date}</td>
                    </tr>
                    <tr>
                        <td>Content : </td>
                        <td>{props.content}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DocumentThreadModel