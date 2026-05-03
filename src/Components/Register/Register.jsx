

import { useState } from "react";
import { Link } from "react-router-dom";

function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = () => {
        if(name && email && password){
            alert("Registration Successful");
        }else{
            alert("Please fill all field");
        }
    };

  return (

    <div className="container">
         <div className="register-box">
            <h1>Create Account</h1>
            <p>Register to continue</p>

            <input type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
            />
            <input type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegister}>
                Register
            </button>

            <p>
                Already have an account?
                <Link to="./register">Login</Link>
            </p>

         </div>

    </div>
  );
}

export default Register;