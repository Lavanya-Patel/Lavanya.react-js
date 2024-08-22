// Login.js
import React, { useState } from 'react';
import { auth } from '../Service/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                alert("You're logged in! 😎");
            })
            .catch((err) => {
                console.log(err);
                alert("Login failed. Please check your credentials."); // Optional: Show error message
            });
    };

    return (
        <div className='account'>
            <div className='login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{ width: "90%" }} value={email}  type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;