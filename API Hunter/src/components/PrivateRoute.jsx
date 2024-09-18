import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);  

  // Check if the user is authenticated
  if (!authState.isAuth) {
   window.location.href="/login"
   alert("You'r not login")
  }

  return children; 
};

export default PrivateRoute;