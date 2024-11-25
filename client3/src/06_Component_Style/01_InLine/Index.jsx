import React from "react";

const InLine = () => {
  return (
    // CamelCase
    <div style={{ backgroundColor: "coral" }}>  
      <h1 style={{ color: "white" }}>This is Headline</h1>
      <p
        style={{
          color: "black",
          fontFamily: "courier",
          fontSize: "160%",
        }}
      >
        This is Paragraph
      </p>
    </div>
  );
};

export default InLine;
