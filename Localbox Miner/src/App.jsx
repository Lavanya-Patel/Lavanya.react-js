import React, { useContext } from 'react';
import { themecontext } from './context/Themecontext'
import Button from "../src/component/Button"
import Navbar from "../src/component/Navbar"
import Midsection from  "../src/component/Midsection"
import './App.css'
const App = () => {
  const { theme } = useContext(themecontext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        minHeight: '100vh', 
        transition: 'background-color 0.3s, color 0.3s'
      }}
    >
      <Navbar />
      <Midsection />
      <Button />
      
    </div>
  );
};

export default App;