import React, { useContext, useEffect,useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { io } from "socket.io-client";
import { AuthContext } from '../Contexts/authContext';
import { ChatContext } from '../Contexts/chatContext';

const Home = () => {

  const [onlineUsers,setOnlineUsers] = useState([]);
  const {userId,userName} = useContext(AuthContext);
  const [socket,setSocket] = useState(null);
  const [selectedUser,setSelectedUser] = useState(null);
  const [userChats,setUserChats] = useState([]);

  console.log(userChats);

  const selectedUserHandler = (user)=>{

    setSelectedUser(user);
  }

  useEffect(()=>{
    const socket = io("http://localhost:4300");

    setSocket(socket);

    return ()=>{
        socket.disconnect();
    }
  },[])


  useEffect(()=>{
    if(!socket) return;
    socket.emit("setOnline",userId,userName);
  socket.on("getOnlineUsers",(onlineUsers)=>{
    setOnlineUsers(onlineUsers)
  })
    

    return ()=>{
      socket.off("getOnlineUsers");
    }
  },[socket])

  useEffect(()=>{
    if(!socket) return;
  socket.on("getMessage",(message)=>{
    setUserChats((prev)=>[...prev,message]);
  })
    
    return ()=>{
      socket.off("getMessage");
    }
  },[socket])

  return (
    <ChatContext.Provider value={{selectedUser,socket,userChats,setUserChats}}>
    <div className='home'>
      <div className="container">
        <Sidebar onlineUsers={onlineUsers} onSelectUser={selectedUserHandler}/>
        <Chat/>
      </div>
    </div>
    </ChatContext.Provider>
  )
}

export default Home