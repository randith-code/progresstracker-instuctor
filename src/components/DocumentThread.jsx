import React,{ useState } from "react";
import ModelOverlay from "./ModelOverlay"
import DocumentThreadModel from "./DocumentThreadModel"

const DocumentThread = (props) => {

    const [isVisible, setIsVisible] = useState(false)

    return(
        <>
            <div onClick={() => setIsVisible(true)} className="flex w-10/12 rounded-md bg-white drop-shadow-md">
                <section className='w-2 bg-blue-700 rounded-l-md'></section>
                <section className="flex flex-1 justify-around items-center py-2">
                    <h2>{props.title}</h2>
                    <h2>{props.wroteDate}</h2>
                </section>
            </div>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <DocumentThreadModel tittle={props.title} date={props.wroteDate} content={props.content}/>
            </ModelOverlay>
        </>
    )
}

export default DocumentThread