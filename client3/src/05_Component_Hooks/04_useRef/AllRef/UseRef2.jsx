import React, { useState, useEffect, useRef } from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const prev_count = useRef(0);
  
  useEffect(() => {
    prev_count.current = count;
  },[count]);

  const handelClick=()=>{
    setCount(count+1)
  }
  return (
    <>
      <h1>Render Count:{count}</h1>
      <h1>Previous Count:{prev_count.current}</h1>
      <button onClick={handelClick}>Increment</button>
    </>
  );
};

export default UseRef2;
