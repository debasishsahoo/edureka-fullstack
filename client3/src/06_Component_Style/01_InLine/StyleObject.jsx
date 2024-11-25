import React from "react";

const StyleObject = () => {
  const divStyle = {
    color: "black",
    backgroundColor: "DodgerBlue",
    padding: "40px",
    fontFamily: ' "Lucida Console", "Courier New", monospace ',
  };

  return (
    <div style={divStyle}>
      <h1>This is Headline</h1>
      <p>This is Paragraph</p>
    </div>
  );
};

export default StyleObject;
