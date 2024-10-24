import React from "react";
import DataSource from "./DataSource";
const Teacher = () => {
  return (
    <div>
      <Subject />
    </div>
  );
};

const Subject = () => {
  return (
    <>
      <h1>This is Subject Component</h1>
      <DataSource />
    </>
  );
};

export default Teacher;
