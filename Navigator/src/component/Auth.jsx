import React from 'react'

const Auth = ({children}) => {
    const isAuth=localStorage.getItem("token")
  
 
if(!isAuth){
window.location.href="/login"
alert("You'r not login!😪")
}else{
    return children
}
}

export default Auth