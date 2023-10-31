import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Contexts/authContext";

const Message = ({ message }) => {
  const { userId } = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === userId && "owner"}`}
    >
      <div className="messageInfo">
        <span>{message.timeStamp ? message.timeStamp : "just now"}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
