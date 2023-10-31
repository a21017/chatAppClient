import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/authContext'
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'

const Navbar = () => {
  const {userName,setAuthenticated,setName} = useContext(AuthContext)
  const currentUser = {photoURL:'',displayName:userName}

  const logOutFn = ()=>{

    localStorage.clear();
    setAuthenticated(false);
    setName(null);


  }

  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button style={{padding:'5px'}} onClick={logOutFn}>logout</button>

      </div>
    </div>
  )
}

export default Navbar