import React from "react";
import "./DefaultEvent.css";
class BindComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  ChangeName(e) {
    console.log('old Value of Name: ',this.state.name)
    this.setState({
      name: e.target.value,
    });
    
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Simple Event Example</h2>
        <label>Enter Your Name: </label>
        <input type="text" id="nm" onChange={this.ChangeName.bind(this)} />
        <h4>You Entered:{this.state.name}</h4>
      </div>
    );
  }
}

export default BindComponent;
