import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(credentials);
      navigate("/product");
    } catch (error) {
      setError(error.response?.data?.message || "Sign in Failed");
    }
  };

  return (
      <div className="register">
        <h2>Sign In</h2>
        <form onSubmit={handelSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handelChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handelChange}
            required
          />
          <button type="submit">Submit</button>
          <p>
            Don`t Have An Account?<Link to="/signup">Signup Here</Link>
          </p>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    );
};

export default SignIn;
