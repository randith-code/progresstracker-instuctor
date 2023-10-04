import Actions from "../Actions";

const userReducer = (state, action) => {
    switch(action.type) {
        case Actions.CHANGE_USER : {
            return{
                user: action.user
            }
        }
        default: {
            return {
                user:{}
            }
        }
    }
}

export default userReducer