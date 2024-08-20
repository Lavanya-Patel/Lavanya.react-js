import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='Nav'>
      <ul className='NavUl'>
       
          <NavLink activeClassName='active' to={"/"}>Home</NavLink>
          <NavLink activeClassName='active' to={"/about"}>About</NavLink>
          <NavLink activeClassName='active' to={"/login"}>Login</NavLink>
          <NavLink activeClassName='active' to={"/product"}>Product</NavLink>
          <NavLink activeClassName='active' to={"/description"}>Description</NavLink>
      
      </ul>
    </div>
  )

}

export default Navbar
