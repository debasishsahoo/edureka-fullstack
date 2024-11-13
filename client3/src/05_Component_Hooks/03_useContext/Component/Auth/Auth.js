import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import "../style.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  console.log(auth.status);

  return (
    <div>
      <h1>Are You Authenticated</h1>
      {auth.status ? (
        <p className="button">You are Logged in</p>
      ) : (
        <p className='button button3'>You are Logged out</p>
      )}
      <button onClick={auth.login} className="button button2">
        Click to login
      </button>
    </div>
  );
};

export default Auth;
