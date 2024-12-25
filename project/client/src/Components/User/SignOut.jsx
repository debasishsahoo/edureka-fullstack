import React,{useContext} from 'react'
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const SignOut = () => {
const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSubmit = async () => {
    signOut()
    localStorage.removeItem('token');
    navigate('/')
  };

  return (
    <button onClick={handelSubmit}>SignOut</button>
  )
}

export default SignOut