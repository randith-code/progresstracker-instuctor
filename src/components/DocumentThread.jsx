import React from "react";

const DocumentThread = (props) => {
    return(
        <div className="flex w-10/12 rounded-md bg-white drop-shadow-md">
            <section className='w-2 bg-blue-700 rounded-l-md'></section>
            <section className="flex flex-1 justify-around items-center py-2">
                <h2>{props.title}</h2>
                <h2>{props.wroteDate}</h2>
            </section>
        </div>
    )
}

export default DocumentThread