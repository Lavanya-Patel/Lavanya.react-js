import React, { useContext } from 'react'
import { themecontext } from '../context/Themecontext'

const Navbar = () => {
    const {theme}=useContext(themecontext)
  return (
    <div style={{textAlign:"center"}}>
      <h1>Navbar</h1>
      <h3>The Theme is {theme}</h3>
    </div>
  )
}

export default Navbar
