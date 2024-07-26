import React from 'react'

const Auth = ({children}) => {
    const isAuth=localStorage.getItem("token")
  
 
if(!isAuth){
alert("You'r not login")
}else{
    return children
}
}

export default Auth