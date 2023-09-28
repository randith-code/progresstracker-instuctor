import React,{useReducer} from "react";
import UserContext from "./UserContext";
import userReducer from "./UserReducer";
import Actions from "./Actions";

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
        <UserContext.Provider  value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider