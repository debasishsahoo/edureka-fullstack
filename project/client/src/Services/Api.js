import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

//set Auth Token

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export default api;
