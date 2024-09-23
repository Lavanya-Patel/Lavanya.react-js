import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);  

  if (!authState.isAuth) {
   window.location.href="/login"
   alert("You'r not login")
  }

  return children; 
};

export default PrivateRoute;