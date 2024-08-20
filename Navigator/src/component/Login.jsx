import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,
      password
    }
    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
      let tokenfromApi =res.data.token
      localStorage.setItem("token" , tokenfromApi)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
   <div className='form-container'>
    <h1 className='login-title '>Login Page</h1>
    <form action="" onSubmit={(e)=>handlesubmit(e)} className='form'>
      <input className='userName' onChange={(e)=>setemail(e.target.value)} type="email"  placeholder='Enter Your Email'/>
      <input  className= 'userPassword'onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Enter Your Password' />
      <input  className ='loginBtn'type="submit" />
    </form>
   </div>
  )
}

export default Login
