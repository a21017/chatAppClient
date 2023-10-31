import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { ChatContext } from "../Contexts/chatContext";
import { AuthContext } from "../Contexts/authContext";


const Input = () => {

  const {userId} = useContext(AuthContext);
  const {userChats,setUserChats} = useContext(ChatContext);
  const {socket,selectedUser} = useContext(ChatContext);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

 

  const handleSend = async () => {

    function changeTimeFormat() {
      let date = new Date();
      let n = date.toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit'
      });
   
      return n;
  }
   
  

    const msg = {senderId:userId,receiverId:selectedUser.userId,text,timeStamp:changeTimeFormat()};
    socket.emit('sendMessage',msg);
    setUserChats((prev)=>[...prev,msg]);
    setText('');
   
  
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
