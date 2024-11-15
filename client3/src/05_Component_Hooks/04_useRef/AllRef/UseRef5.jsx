import React, { useState, useRef } from "react";

const UseRef5 = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (timeRef.current) return;
                                            //65+1+1
    timeRef.current = setInterval(() => {   //0+1 +1
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  return (
    <div>
      <h1>Timer:{time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default UseRef5;
