import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Contexts/chatContext";

const Chat = () => {  

  const {selectedUser} = useContext(ChatContext)
  return (
    <div className="chat">
    {selectedUser?
      (<><div className="chatInfo">
        <span>{selectedUser.userName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/></>)
    :
    <div className="chatInfo"><p>No Chats Selected</p></div>
    }
      
    </div>
  );
};

export default Chat;
