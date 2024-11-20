import React, { useState,useCallback } from 'react'
const funCount=new Set();

const CallBackCounter = () => {

    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(0)

    const incrementCounter=useCallback(()=>{
        setCount(count+1)
    },[count])
    const decrementCounter=useCallback(()=>{
        setCount(count-1)
    },[count])
    const incrementNumber=useCallback(()=>{
        setNumber(number+1)
    },[number])

    funCount.add(incrementCounter);
    funCount.add(decrementCounter);
    funCount.add(incrementNumber);
  return (
    <div>
      <p>Count:{count}</p>
      <br/>
      <p>Function Count:{funCount.size}</p>
      <br/>
      <button onClick={incrementCounter}> + Counter</button>
      <button onClick={decrementCounter}> - Counter</button>
      <br/>
      <button onClick={incrementNumber}> + Number</button>
    </div>
  )
}

export default CallBackCounter