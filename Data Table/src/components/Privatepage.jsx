import React from 'react'

const Privatepage = ({children}) => {
    const isAuth=localStorage.getItem("token")
  
    if(!isAuth){
       window.location.href="/login"
       alert("You'r not login")
    }else{
        return children
    }
}

export default Privatepage
