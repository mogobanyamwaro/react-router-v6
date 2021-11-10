import React, { useState } from 'react';
import './counter.css';
function Counter() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 2);
  };
  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div>
      <button onClick={decreaseCounter}>-</button>
      <h2 className={`${counter > 10 ? 'green' : 'blue'} `}>{counter}</h2>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
}

export default Counter;
