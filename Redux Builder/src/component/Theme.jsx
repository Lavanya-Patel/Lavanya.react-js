import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from "../Redux/Actiontype.js";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { BiBorderRadius } from 'react-icons/bi';

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.themeReducer.theme);
    const light = {
        marginRight: "60px",
        marginLeft: "45%",
        height: "40px",
        width: "40px",
        color:"black",
       marginTop:"30px",
      borderRadius:"50px",
      border:"none",
      backgroundColor: theme === 'light' ? 'white' : 'white',
    }
    const Dark = {
        height: "40px",
        width: "40px",
        color:"black",
       borderRadius:"50px",
       border:"none",
    }
    const Theme ={
       
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
    }
    return (
        <div style={Theme}>
            <button disabled={theme === 'light'} onClick={() => dispatch(handleTheme('light'))} style={light}>
            <IoSunny />
            </button>
            <button disabled={theme === 'dark'} onClick={() => dispatch(handleTheme('dark'))} style={Dark}>
          
            <IoMdMoon />
            </button>
        </div>
    );
};

export default Theme;