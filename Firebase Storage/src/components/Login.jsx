import React, { useState } from 'react';
import { auth, provider } from '../Service/Firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleclick=()=>{
    signInWithPopup(auth,provider).then
    ((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                alert("You're logged in! 😎");
            })
            .catch((err) => {
                console.log(err);
        
            });
    };

    return (
        <div className='account'>
            <div className='login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{width:"90%"}} type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                    <input type="submit" />
                </form>
                <GoogleButton style={{marginTop:"14px" ,marginLeft:"26%"}}
  onClick={() => {handleclick()}}
/>
              
            </div>
        </div>
    );
};

export default Login;