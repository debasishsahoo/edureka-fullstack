import React from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css'
const Layout = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
