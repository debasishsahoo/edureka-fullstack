import React from "react";
import LeftComponent from "./pages/LeftComponent";
import RightComponent from "./pages/RightComponent";

const main = () => {
  return (
    <div className="card">
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default main;
