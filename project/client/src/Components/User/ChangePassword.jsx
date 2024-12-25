import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const ChangePassword = () => {
  const { changePassword,signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [error, setError] = useState(null);
  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePassword(credentials);
      setCredentials({ ...credentials, [e.target.name]: '' });
      alert('Password Changed Successfully')
      signOut();
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Sign in Failed");
    }
  };

  return (
      <div className="register">
        <h2>Change Password</h2>
        <form onSubmit={handelSubmit}>
          <input
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            value={credentials.oldPassword}
            onChange={handelChange}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={credentials.newPassword}
            onChange={handelChange}
            required
          />
          <button type="submit">Change Password</button>
          <p>
            Please <Link to="/">login Here</Link>
          </p>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    );
};

export default ChangePassword;
