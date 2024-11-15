import React, { useState, useEffect, useRef } from "react";

const UseRef1 = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  
  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count:{count.current}</h1>
      <hr />
      <input
        type="text"
        placeholder='Click the Button to Focus'
        ref={inputRef}
      />
      <br/>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default UseRef1;
