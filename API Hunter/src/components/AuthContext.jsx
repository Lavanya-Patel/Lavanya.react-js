import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    token: null,
  });

  const loginUser = (token) => {
    setAuthState({
      isAuth: true,
      token,
    });
  };

  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};