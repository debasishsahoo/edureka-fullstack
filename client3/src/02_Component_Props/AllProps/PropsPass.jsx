import React from 'react'

const PropsPass = ({students}) => {
  return (
    <div>
      {
        students.map((student,index)=>{
            return <h1 key={index}>Value={student} | key={index}</h1>
        })
      }
    </div>
  )
}

export default PropsPass
