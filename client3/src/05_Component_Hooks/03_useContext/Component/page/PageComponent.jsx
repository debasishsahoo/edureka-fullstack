import React, { useState } from "react";
import AuthContext from "../Auth/AuthContext";
import Auth from "../Auth/Auth";

const LoginMethod = () => {
  const [authStatus, setAuthStatus] = useState(false);

  const login = () => {
    setAuthStatus(true);
  };
  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      <Auth />
    </AuthContext.Provider>
  );
};

export default LoginMethod;
