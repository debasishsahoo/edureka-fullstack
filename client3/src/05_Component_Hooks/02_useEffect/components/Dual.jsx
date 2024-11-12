import React, { useEffect, useState } from "react";

const Dual = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {console.log('You have Click the First Button')},[count1]);
  useEffect(() => {console.log('You have Click the Second Button')},[count2]);

  return (
    <div>
      <p>Count-1:{count1}</p>
      <button onClick={()=>setCount1(count1+1)}>+</button>
      <br/>
      <p>Count-2:{count2}</p>
      <button onClick={()=>setCount2(count2+1)}>+</button>
    </div>
  );
};

export default Dual;
