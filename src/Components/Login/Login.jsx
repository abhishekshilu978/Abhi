

// import {useState} from 'react'
// // import styles from "./Login.module.css";

// function Login() {
//     const [email, setEmail] = useState(" ");
//     const [password, setPassword] = useState(" ");

//     const handleLogin = () => {
//         if(email === "Abhishekkumar@gmail.com" && password === "12345678"){
//             alert("Login Successful");
//     } else {
//         alert("Invalid Email or Password");
//     }
// };

//   return (
//     <div>
//         <h1>
//             Login
//         </h1>
//         <input type="email"
//         placeholder='Enter Email'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
        
//         />
//         <br />
//         <br />
//         <input type="password"
//         placeholder='Enter Password'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />
//         <button onClick={handleLogin}>
//             Login

//         </button>
//     </div>
//   );
// }

// export default Login;


import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.module.css";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    if(email === "admin@gmail.com" && password === "1234"){
      alert("Login Successful");
    }else{
      alert("Invalid Credentials");
    }

  };

  return(

    <div className="container">

      <div className="login-box">

        <h1>Welcome Back</h1>
        <p>Login to continue</p>

        <div className="input-box">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <p>
             Already have an account?
            <Link to="/login">Register</Link>
        </p>

        <div className="links">
          <a href="#">Forgot Password?</a>
        </div>

      </div>

    </div>

  );

}

export default Login;