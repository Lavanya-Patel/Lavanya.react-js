import React, { useContext } from 'react'
import { themecontext } from '../context/Themecontext'

const Button = () => {
    const {themeupdatefunction,theme}=useContext(themecontext)
 
  return (
    <div>
      <button style={{marginTop:"10px" ,backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}} onClick={themeupdatefunction}>Change Theme</button>
    </div>
  )
}

export default Button
