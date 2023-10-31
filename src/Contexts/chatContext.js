import { createContext } from "react";

export const ChatContext = createContext({
    selectedUser:null,
    socket:null,
    userChats:[],
    setUserChats:()=>{} //{senderId:null,message:null}
});


