import React from "react";
// import SingleProps from "./AllProps/SingleProps";
// import MultipleProps from "./AllProps/MultipleProps";
// import ValueProps from "./AllProps/ValueProps";
// import PropsPass from "./AllProps/PropsPass";
// import OptionalProps from "./AllProps/OptionalProps";
// import PropsSpread from "./AllProps/PropsSpread";
// import ParentComponent from "./AllProps/ParentComponent";
//import Percentage from './AllProps/InValidProps'
import PropsValidator from './AllProps/PropsValidator'
const ComponentPropsMain = () => {
  // const name = "Debasish";
  // const age = 36;

  // const arr = { a: "React", b: "Angular" };

  return (
    // <div>
    //   <SingleProps name="Debasish" />
    //   <br />
    //   <MultipleProps name="Debasish" title="Sahoo" />
    //   <br />
    //   <ValueProps
    //     str="This is String Value"
    //     num={23}
    //     bool={true}
    //     obj={{ name: "Debasish", title: "Sahoo" }}
    //     arr={["a", "b", "c"]}
    //     temp={`Hello i am ${name}, my age is ${age}`}
    //     jsx={5 + 6 + 7 - (2 * 5) / 7}
    //   />
    //   <br />
    //   <PropsPass students={["Saheli", "Srabani", "Anit", "Debasish"]} />
    //   <br />
    //   <OptionalProps student="Anit" />
    //   <br />
    //   <OptionalProps />
    //   <br />
    //   <PropsSpread a={arr.a} b={arr.b} />
    //   <br />
    //   <PropsSpread {...arr} />
    //   <br />
    //   <ParentComponent>
    //     <span>
    //       Hi i'm Child
    //     </span>
    //     <div>
    //       <h1> This Child Component</h1>
    //     </div>
    //   </ParentComponent>
    // </div>
    <div>
      {/* <Percentage label="Calculation 1" total={0} score={230}/> */}
      {/* <Percentage  total={100} score={96}/> */}
      {/* <Percentage label="Calculation 2" score='a'/> */}
      <PropsValidator
      anyValue='This is Any Value'
      propObj={{ name:'Saheli'}}
      propArray={[1,2,3,4,5]}
      propBool={true}
      propFunc={function(x){return x+5}}
      propNumber={1}
      propString='Srabani Roy'
      />
    </div>
  );
};

export default ComponentPropsMain;
