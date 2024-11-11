import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
