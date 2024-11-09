import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  increment = () => {
    this.setState({
      x: this.state.x + 1,
    });
  };

  decrement = () => {
    this.setState({
      x: this.state.x - 1,
    });
  };

  render() {
    return (
      <div>
        <h1> Increment or Decrement Counter</h1>
        <div className="container">
          <button
            onClick={() => {
              this.increment();
            }}
          >
            +
          </button>
          <h2>{this.state.x}</h2>
          <button
            onClick={() => {
              this.decrement();
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
