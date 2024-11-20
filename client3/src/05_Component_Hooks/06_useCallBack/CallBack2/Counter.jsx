import React, { useState } from 'react'
const funCount=new Set();

const Counter = () => {

    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(0)

    const incrementCounter=()=>{
        setCount(count+1)
    }
    const decrementCounter=()=>{
        setCount(count-1)
    }
    const incrementNumber=()=>{
        setNumber(number+1)
    }

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

export default Counter