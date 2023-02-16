import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { logo, speedwappLogo, feedback, preview, logout } from "../../assets";
import "./sidebar.css";

const Sidebar = ({showNav}) => {
  return (
    <div className="sidebar_container" style={{width: `${showNav? "15%": "5%"}`}}>
      <div>
        <ul className="w-100 p-0 mt-4 sidebar_middle">
        <CustomLink className="sidebar_item" to="/">
            <span className="ml-2">
            <i class="fa fa-eye" />
            </span>
            {showNav ? "Users feedback" : ""}
          </CustomLink>
         
          <CustomLink className="sidebar_item" to="/projects">
            <span className="ml-2">
            <i class="fa fa-eye" />
            </span>
            {showNav ? "Preview Project" : ""}
          </CustomLink>
        </ul>
      </div>

      <div className="mb-3">
        <li className="sidebar_item">
          <i class="fa fa-sign-out"></i>
          {showNav ? "Logout" : ""}
        </li>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li
      className={
        isActive
          ? "active"
          : ""
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
