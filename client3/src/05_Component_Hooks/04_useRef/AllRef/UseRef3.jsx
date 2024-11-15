import React, { useState, useEffect, useRef } from "react";

const UseRef3 = () => {
  const [inputValue, setInputValue] = useState("");
  const prev_value = useRef();
  
  useEffect(() => {
    prev_value.current = inputValue
  },[inputValue]);


  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Current Value:{inputValue}</h1>
      <h1>Previous Value:{prev_value.current}</h1>
    </>
  );
};

export default UseRef3;
