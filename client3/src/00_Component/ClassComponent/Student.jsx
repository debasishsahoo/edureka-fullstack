import React from "react";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "REACT",
        },
        {
          name: "ANGULAR",
        },
        {
          name: "Vue",
        },
      ],
    };
  }
  componentDidMount() {
    console.info("Called LifeCycle Method");
  }

  render() {
    return (
      <>
        <Subject />
        <h1>Hi Render is Called</h1>
        <ul>
          {this.state.data.map((element)=><DataList data={element}/>)}
        </ul>
      </>
    );
  }
}

class Subject extends React.Component {
  render() {
    return (
      <>
        <h1>This is Subject Component</h1>
      </>
    );
  }
}

class DataList extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>{this.props.data.name}</li>
        </ul>
      </>
    );
  }
}

export default Student;
