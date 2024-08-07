import React, { createContext, useState } from 'react';

export const themecontext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeupdatefunction = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <themecontext.Provider value={{ theme, themeupdatefunction }}>
      {children}
    </themecontext.Provider>
  );
};