import React, { useState } from 'react'

const UserInput = () => {

const [inp,setInp]=useState('Use State Hooks')

let inp_of_user=(e)=>{
  console.log('old Value:',inp)
    setInp(e.target.value);
}


  return (
    <div>
      <h1> User State Input</h1>
      <input placeholder='Enter Something...' onChange={inp_of_user}/>
      <div>
        <h4>{inp}</h4>
      </div>
    </div>
  )
}

export default UserInput
