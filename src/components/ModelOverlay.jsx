import React from "react";
import ReactDOM from "react-dom";

const ModelOverlay = (props) => {

    const Content = () => {

        return(
            (props.visibility == true) ?  <div className={`absolute top-0 left-0 bottom-0 w-screen h-screen z-10 bg-transparent-black grid place-items-center`}
                onClick = {() => props.setVisibility(false)}
            >
            {props.children}</div> : <div></div>
        )
        
    }

    return(
        <>
            {ReactDOM.createPortal(<Content/>, document.getElementById('overlay-root'))}
        </>
    )
}

export default ModelOverlay
