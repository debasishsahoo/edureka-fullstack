import React from 'react'
import './State4.css'
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(),
        };
        setInterval(()=>this.setTime(),1000)
      }


      setTime(){
        this.setState((state)=>({date:new Date()}))
      }


      render() {
        return(
            <div className='clock'>{this.state.date.toString()}</div>
        )
      }
}

export default Clock