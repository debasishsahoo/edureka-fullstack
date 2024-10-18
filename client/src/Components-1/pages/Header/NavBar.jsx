import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Marketing Site</li>
            <li>
              <a href="#">One</a>
            </li>
            <li>
              <a href="#">Two</a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <a href="#">Three</a>
            </li>
            <li>
              <a href="#">Four</a>
            </li>
            <li>
              <a href="#">Five</a>
            </li>
            <li>
              <a href="#">Six</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
