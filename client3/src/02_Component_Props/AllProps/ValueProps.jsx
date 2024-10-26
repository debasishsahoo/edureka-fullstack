import React from 'react'

const ValueProps = (props) => {
  return (
    <div>
        <h1>String Literals:{props.str}</h1>
        <h1>Number Literals:{props.num}</h1>
        <h1>Boolean Literals:{props.bool===false?"FALSE":"TRUE"}</h1>
        <h1>Object Literals-1:{props.obj.name}</h1>
        <h1>Object Literals-2:{props.obj.title}</h1>
        <h1>Array Literals-1:{props.arr}</h1>
        <h1>Array Literals-2:{props.arr[0]}</h1>
        <h1>Array Literals-3:{props.arr[1]}</h1>
        <h1>Template Literals:{props.temp}</h1>
        <h1>JSX :{props.jsx}</h1>
    </div>
  )
}

export default ValueProps
