import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
    const counterValue = useSelector((state) => state.counterReducer.value);
    return <h1>{counterValue}</h1>;
};

export default CounterValue;