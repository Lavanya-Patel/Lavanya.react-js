import React, { useState } from 'react';
import { auth } from '../Service/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ toggleAuthMode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                alert("You're logged in! 😎");
            })
            .catch((err) => {
                console.log(err);
                alert("Sign-up first")
            });
    };

    return (
        <div className='account'>
            <div className='login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                    <input type="submit" />
                </form>
                <p className="toggle-auth" onClick={toggleAuthMode}>New? Register here</p>
            </div>
        </div>
    );
};

export default Login;