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
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      let tokenfromreqres =res.data.token
      localStorage.setItem("token",tokenfromreqres)
      alert("Done")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='login-page'>
    <h1>Login</h1>  
    <form action="" onSubmit={(e)=>handlesubmit(e)}>
      <input onChange={(e)=>setemail(e.target.value)}type="text" placeholder='Enter Your Email' />
      <input onChange={(e)=>setpassword(e.target.value)}type="password"  placeholder='Enter Your Password' />
      <input type="submit" />

   <article style={{display:"flex",marginRight:"130px",marginTop:"20px"}}>
    <input style={{height:"18px"}} type="checkbox"/>
   <p>Remember me</p>
   </article>
    </form>
    </div>
  )
}

export default Login
