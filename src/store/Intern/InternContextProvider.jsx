import React,{useReducer} from "react";
import InternContext from "./InternContext";
import userReducer from "./InternReducer";
import Actions from "../Actions";

const defaultUserState ={
    user:{}
}

const UserContextProvider = (props) => {

    const [userState, dispatchUserAction] = useReducer(userReducer, defaultUserState)

    const handleChangeUser = user => {
        dispatchUserAction({
            type: Actions.CHANGE_USER,
            user: user
        })
    }

    const userContext = {
        user:userState.user,
        changeUser:handleChangeUser
    }

    return(
        <InternContext.Provider  value={userContext}>
            {props.children}
        </InternContext.Provider>
    )
}

export default UserContextProvider