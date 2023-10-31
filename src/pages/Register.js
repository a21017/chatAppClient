import React, { useState } from "react";
import { postRequest } from "../services";
// import Add from "../img/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(name,email,password);

    const user = await postRequest("http://localhost:5000/api/users/register",JSON.stringify({name,email,password}));
    if(user._id){
      setLoading(false);
      navigate('/login');
    }
   
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Enter your name" />
          <input required type="email" placeholder="Enter Email" />
          <input required type="password" placeholder="Enter your password" />
          {/* <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img  alt="" />
            <span>Add an avatar</span>
          </label> */}
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          {/* You do have an account? <Link to="/register">Login</Link> */}
        </p>
      </div>
    </div>
  );
};

export default Register;
