import React from "react";
import { logo } from "../../assets";
import "./navbar.css";

const Navbar = ({handleCilck}) => {
  return (
    <div className="navbar">
        <div className="navbar__left">
      <i className="fa fa-bars toggle--sidebar" onClick={handleCilck} />
      <div className="navbar__logo--container">
        <img src={logo} alt="speedwapp logo" />
      </div>
        </div>

      
      <ul className="navbar__right mb-0">
        <li className="navbar__right-item">
          <i className="fa fa-bell" />
        </li>
        <li className="navbar__right-item">
        <i className="fa fa-user-circle-o"/>
        <span>Username</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
