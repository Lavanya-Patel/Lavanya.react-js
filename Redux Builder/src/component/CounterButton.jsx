import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd, handleReduce } from "../Redux/Actiontype.js";
import Counter from './Counter';

const CounterButtons = () => {
    const dispatch = useDispatch();
    const btn1style = {
        border: "1px solid black",
        marginRight: "30px",
        width: "70px",
        height: "30px",
        backgroundColor: "green",
        color: "white"
    }
    const btn2style = {
        border: "1px solid black",
        width: "70px",
        height: "30px",
        backgroundColor: "red"
    }
    return (
        <div>
            <button style={btn1style} onClick={() => dispatch(handleAdd(1))}>ADD</button>
            <button style={btn2style} disabled={Counter == 0} onClick={() => dispatch(handleReduce(1))}>REDUCE</button>
        </div>
    );
};

export default CounterButtons;