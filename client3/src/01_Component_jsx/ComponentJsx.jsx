import React from "react";

const ComponentJsx = () => {
    const x=5;
    const y="JSX"
  return (
    <div>
      <h1>This is Simple {y} Element</h1>
      <h1>React {y} component is {5 + 2 + 1 + 2} time Faster then Normal Js</h1>
      <h1>{x < 4 ? "Hello" : "GoodBye"}</h1>
    </div>
  );
};

export default ComponentJsx;
