import React from 'react'

const OptionalProps = ({student='Default Student'}) => {
  return (
    <div>
      <h1> Hello {student}</h1>
    </div>
  )
}

export default OptionalProps
