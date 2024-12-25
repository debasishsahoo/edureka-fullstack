import { createContext, useState, useEffect } from "react";

import api, { setAuthToken } from "../Services/Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      const res = await api.get("/user/get-user");
      setUser(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const signUp = async (credentials) => {
    await api.post("/user/signup", credentials);
  };
  const signIn = async (credentials) => {
    const res = await api.post("/user/signin", credentials);
    setAuthToken(res.data.token);
    setUser(res.data.user);
  };
  const signOut = async () => {
    setUser(null);
    setAuthToken(null);
  };
  const changePassword = async (credentials) => {
    await api.put("/user/change-password", credentials);
  };

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, signOut, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
