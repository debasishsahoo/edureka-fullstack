import React,{useState,useEffect} from 'react'

const Count = () => {
const [count,setCount]=useState(0);


useEffect(()=>{setTimeout(()=>{setCount((count)=>count+1)},1000);},[count]);

  return (
    <div>{count}</div>
  )
}

export default Count