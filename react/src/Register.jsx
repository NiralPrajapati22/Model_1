import React, { useState } from "react";
import "./Register.css";
import Header from "./header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Header />
    <div className="container">
      <div className="register-box">
        <h2>Register Form</h2>

        <form>
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