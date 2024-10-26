import React from "react";
import SingleProps from "./AllProps/SingleProps";
import MultipleProps from "./AllProps/MultipleProps";
import ValueProps from "./AllProps/ValueProps";
const Component_Props_Main = () => {
  const name="Debasish"
  const age=36
  return (
    <div>
      <SingleProps name="Debasish" />
      <br />
      <MultipleProps name="Debasish" title="Sahoo" />
      <br />
      <ValueProps
        str="This is String Value"
        num={23}
        bool={true}
        obj={{ name: "Debasish", title: "Sahoo" }}
        arr={["a", "b", "c"]}
        temp={`Hello i am ${name}, my age is ${age}`}
        jsx={5+6+7-2*5/7}
      />
    </div>
  );
};

export default Component_Props_Main;
