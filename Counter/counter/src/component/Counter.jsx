import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const isEven = count % 2 === 0;
  const isPrime = count > 1 && (count <= 3 || ![2, 3].some((x) => count % x === 0));

  const getNumberDescription = () => {
    if (isEven) return 'even';
    if (isPrime) return 'prime';
    return 'neither even nor prime';
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Current Count: {count}</h2>
      <p>The current number is {getNumberDescription()}.</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button  disabled ={count == 0}onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default CounterApp;