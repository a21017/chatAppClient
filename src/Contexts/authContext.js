import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    userName:""
});

export const AuthContextProvider = ({children})=>{

    const [isAuthenticated,setAuthenticated] = useState(false);
    const [userName,setName] = useState(null);
    const [userId,setUserId] = useState(null);

    return(
        <AuthContext.Provider value={{isAuthenticated,userName,setAuthenticated,setName,userId,setUserId}}>
        {children}
        </AuthContext.Provider>
    )

}