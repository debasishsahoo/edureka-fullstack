import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [error, setError] = useState(null);

  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      await signUp(credentials);
      alert('Signup Done')
      navigate('/')
    } catch (error) {
      setError(error.response?.data?.message||'Sign up Failed')
      
    }
  };

  return (
    <div className="register">
      <h2>Sign Up</h2>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={credentials.name}
          onChange={handelChange}
          required
        />
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
          Already Have An Account?<Link to="/">Login Here</Link>
        </p>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;
