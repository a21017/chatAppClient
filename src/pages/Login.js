import React, { useContext, useState } from "react";
import { postRequest } from "../services";
import { AuthContext } from "../Contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const {setAuthenticated,setName,setUserId,userId} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await postRequest("http://localhost:5000/api/users/login",JSON.stringify({email,password}));


    if(result._id){
      setAuthenticated(true);
      setName(result.name);
      setUserId(result._id);
      localStorage.setItem("User",JSON.stringify(result));
      navigate("/");
      return;
    }
    
    setErr(true);

    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   navigate("/")
    // } catch (err) {
    //   setErr(true);
    // }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Please enter your email" />
          <input type="password" placeholder="Please enter your password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        {/* <p>You don't have an account? <Link to="/register">Register</Link></p> */}
      </div>
    </div>
  );
};

export default Login;
