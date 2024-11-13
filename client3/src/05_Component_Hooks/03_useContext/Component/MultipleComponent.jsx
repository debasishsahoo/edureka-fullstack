import { useState } from "react";
import "./style.css";
const Component1 = () => {
  const [user, setUser] = useState("Debasish Sahoo");
  return (
    <>
      <h1 className="button">Component1</h1>
      <h2 className="button dashed">Hello {user}</h2>
      <Component2 user={user} />
    </>
  );
};

const Component2 = ({ user }) => {
  return (
    <>
      <h1>Component2</h1>
      <Component3 user={user} />
    </>
  );
};

const Component3 = ({ user }) => {
  return (
    <>
      <h1>Component3</h1>
      <Component4 user={user} />
    </>
  );
};

const Component4 = ({ user }) => {
  return (
    <>
      <h1>Component4</h1>
      <Component5 user={user} />
    </>
  );
};

const Component5 = ({ user }) => {
  return (
    <>
      <h1 className="button">Component5</h1>
      <h2 className="button dashed">Hello {user} again</h2>
    </>
  );
};

export default Component1;
