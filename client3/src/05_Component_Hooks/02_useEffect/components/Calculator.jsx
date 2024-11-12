import React, { useEffect, useState } from 'react'

const Calculator = () => {

const [count,setCount]=useState(0);


const [calculator,setCalculator]=useState(0);



useEffect(()=>{
    setCalculator(()=>count+2)
},[count]);


  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
        <p>Calculator:{calculator}</p>
    </div>
  )
}

export default Calculator