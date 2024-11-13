import { createContext } from "react";

const AuthContext = createContext({
  status: null,
  login: () => {},
});

export default AuthContext;
