import React from "react";

const UserContext = React.createContext({
    user:{},
    changeUser: (user) => {},
})

export default UserContext