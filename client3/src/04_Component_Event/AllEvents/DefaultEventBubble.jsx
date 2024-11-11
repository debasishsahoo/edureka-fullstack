import React from "react";
import "./DefaultEvent.css";

class DefaultEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      Name: "Debasish Sahoo",
    };
  }

  clickHandel1() {
    console.log("Button Clicked");
  }
  clickHandel2() {
    console.log("Div Clicked");
  }
  EventHandler(e) {
    e.preventDefault();
    console.log("Link Clicked");
  }

  HandleClick = (id, e) => {
    console.log('id:', id)
    console.log('e of HandleClick:', e)
  };

  HandleArg = (e) => {
    console.log('e of HandleArg:', e)
    this.HandleClick(this.state.id, e);
  };

  render() {
    return (
      <div>
        <button className="button button3" onClick={this.clickHandel1}>
          Click
        </button>
        <br />

        <div className='dashed' onClick={this.clickHandel2}>
          <button className="button button2">Click</button>
        </div>
        <br />

        <a href="www.google.com" onClick={this.EventHandler}>
          Click
        </a>
        <br />

        <h1>Test App {this.state.Name}</h1>
        <br />

        <button className="button button4" onClick={this.HandleArg}>
          Display
        </button>
      </div>
    );
  }
}

export default DefaultEvent;
