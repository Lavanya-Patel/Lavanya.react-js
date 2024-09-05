import React from 'react';
import { useSelector } from 'react-redux';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButton';


const Counter = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const counterstyle = {
    height: "455px",
    width:"100%",
    backgroundColor: theme === 'light' ? 'white' : 'black',
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    textAlign: "center",
    paddingTop: "60px",

  }
  return (
    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'} style={counterstyle}>
      <h1>Counter</h1>
      <CounterValue />
      <CounterButtons />

    </div>
  );
};

export default Counter;