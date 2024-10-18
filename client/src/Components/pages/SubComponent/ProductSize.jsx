import React from 'react'

const ProductSize = (props) => {

  const ProductSize=props.size.map(element=><li className="bg">{element}</li>)

  return (
    <ul>
    <li>SIZE</li>
    {ProductSize}
  </ul>
  )
}

export default ProductSize