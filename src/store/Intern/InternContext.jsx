import React from "react";

const InternContext = React.createContext({
    user:{},
    changeUser: (user) => {},
})

export default InternContext