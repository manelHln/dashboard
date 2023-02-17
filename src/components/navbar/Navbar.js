import React from "react";
import { logo } from "../../assets";
import "./navbar.css";

const Navbar = ({ handleCilck }) => {
  return (
    <div className="header">
      <div className="header__left">
        <button onClick={handleCilck} className="icon-button">
          <i className="fa fa-bars" />
        </button>
        <div className="header__logo--container">
          <img src={logo} alt="speedwapp logo" />
        </div>
      </div>

      <ul className="header__right mb-0">
        <li className="header__right-item">
          <button className="icon-button">
            <span className="mr-2">My Account</span>
            <i className="fa fa-user-circle-o" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
