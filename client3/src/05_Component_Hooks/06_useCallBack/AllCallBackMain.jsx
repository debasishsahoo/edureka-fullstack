import React from 'react'
import App from './CallBack1/Index'
import Counter from './CallBack2/Counter'
import CallBackCounter from './CallBack2/CallBakCounter'
const AllCallBackMain = () => {
  return (
    <div>
        {/* <App/> */}
        <Counter/>
        <br/>
        <CallBackCounter/>
    </div>
  )
}

export default AllCallBackMain