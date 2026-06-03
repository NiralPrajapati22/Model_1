import React, { useState } from "react";
import "./Register.css";
import Header from "./header";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const insert_data = async (e) =>{
    e.preventDefault()
    await axios.post('https://automatic-space-spork-97vrjg4v9g44374gq-5500.app.github.dev/register',{name,email,password});
  }

  return (
    <>
    <Header />
    <div className="container">
      <div className="register-box">
        <h2>Register Form</h2>

        <form onSubmit={insert_data}>
          <input type="text" placeholder="Enter Name" value={name}
            onChange={(e) => setName(e.target.value)}/>

          <p>
            {name === "" ? "Name is required" : "Name entered successfully"}
          </p>

          <input type="email" placeholder="Enter Email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>

          <p>
            {email === "" ? "Email is required" : "Email entered successfully"}
          </p>

          <input type="password" placeholder="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>

          <p>
            {password === "" ? "Password is required" : password.length < 6 ? "Password must be 6 characters" : "Password is strong"}
          </p>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;