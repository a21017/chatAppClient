import React, { useContext, useEffect, useState } from "react";
import Person from "../img/personImg.png";
import { AuthContext } from "../Contexts/authContext";

const Chats = ({ onlineUsers,onSelectUser }) => {

  const {userId} = useContext(AuthContext);
  

  const handleSelect = (user) => {
    onSelectUser(user);
  };

  return (
    <div className="chats">
      {onlineUsers.map((user) => {
        if (user.userId !== userId) {
          return (
            <div className="userChat" key={user.userId} onClick={handleSelect.bind(this,user)}>
              <img src={Person} alt="" />
              <div className="userChatInfo">
                <span>{user.userName}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Chats;
