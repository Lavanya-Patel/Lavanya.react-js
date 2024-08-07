import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Service/Firebase';

const Signup = ({ toggleAuthMode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                alert("Account Created!");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='sign-up'>
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                <input type="submit" />
            </form>
            <p className="toggle-auth" onClick={toggleAuthMode}>Already have an account? Login here</p>
        </div>
    );
};

export default Signup;