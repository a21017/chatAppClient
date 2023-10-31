import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../Contexts/chatContext";
import { AuthContext } from "../Contexts/authContext";

const Messages = () => {
  const {userId} = useContext(AuthContext);
  const {selectedUser,userChats} = useContext(ChatContext);
  const [currentChats,setCurrentChats] = useState([]);

  useEffect(() => {

    const chats = userChats.filter((chat)=>(
 
       (((chat.senderId===selectedUser.userId)&&(chat.receiverId===userId))||((chat.receiverId===selectedUser.userId)&&(chat.senderId===userId)))
    ));
    setCurrentChats(chats);
    },[userChats,selectedUser]);


  if(!currentChats){
    return(
      <><p>No chats</p></>
    )
  }

  return (
    
    <div className="messages">
      {currentChats.map((m) => (
        <Message message={m} />
      ))}
    </div>
  );
};

export default Messages;
