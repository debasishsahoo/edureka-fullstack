import React, { useState, useEffect, useRef } from "react";

const UseRef4 = () => {
  const inp1Ref = useRef(null);
  const inp2Ref = useRef(null);
  const inp3Ref = useRef(null);

  const handelSubmit=()=>{
    inp2Ref.current.focus();
    inp1Ref.current.focus();
    inp3Ref.current.focus();
  }

  return (
    <>
      <input
        type="text"
        ref={inp1Ref}
      />
      <input
        type="text"
        ref={inp2Ref}
      />
      <input
        type="text"
        ref={inp3Ref}
      />
      <br />
      <button onClick={handelSubmit}>Focus Input</button>
    </>
  );
};

export default UseRef4;
