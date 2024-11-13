import { useState,createContext,useContext } from "react";
import "./style.css";

const UserContext=createContext();
const Component1 = () => {
  const [user, setUser] = useState("Debasish Sahoo");
  return (
    <UserContext.Provider value={user}>
      <h1 className="button">Component1</h1>
      <h2 className="button button2 dashed">Hello {user}</h2>
      <Component5/>
    </UserContext.Provider>
  );
};

const Component5 = () => {
  const user=useContext(UserContext)
  return (
    <>
      <h1 className="button">Component5</h1>
      <h2 className="button button2 dashed ">Hello {user} again</h2>
    </>
  );
};

export default Component1;
