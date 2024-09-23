import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between",backgroundColor:'#D0B8A8',fontSize:"20px"}}>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/singleproduct"}>singleproduct</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Home
