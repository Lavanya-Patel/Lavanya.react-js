import React from 'react'
import { Navigate } from "react-router-dom";
import { auth } from "../Service/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
const Privatepage = ({children}) => {
    const [user]=useAuthState(auth);
    console.log(user)
    if (!user) {
 return <Navigate to="/login" />
}
return children
};
export default Privatepage


