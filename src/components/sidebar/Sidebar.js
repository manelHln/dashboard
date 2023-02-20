import React, { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow((prev) => !prev);
  return (
    <aside
      className="main-sidebar"
      style={{ width: `${show ? "15%" : "50px"}` }}
    >
      <div className="main-navbar">
        <div className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
          <div
            className="navbar-brand w-100 mr-0"
            style={{ lineHeight: "25px" }}
          >
            <div className="d-table m-auto" onClick={handleShow} role="button">
              <i className="fa fa-bars" />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-wrapper">
        <ul className="nav flex-column">
          <CustomLink
            to={"/"}
            className={`nav-link align-items-center ${show ? "" : "py-2 px-3"}`}
          >
            <svg
              fill="currentColor"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
            </svg>
            <span className={` ${show ? "ml-1" : ""}`}>
              {show ? "Users Feedbacks" : ""}
            </span>
          </CustomLink>

          <CustomLink
            to="/projects"
            className={`nav-link align-items-center ${show ? "" : "py-2 px-3"}`}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
            <span className={` ${show ? "ml-1" : ""}`}>
              {show ? "Projects" : ""}
            </span>
          </CustomLink>

          <CustomLink
            to="/preview"
            className={`nav-link align-items-center ${show ? "" : "py-2 px-3"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
            <span className={` ${show ? "ml-1" : ""}`}>
              {show ? "Preview" : ""}
            </span>
          </CustomLink>
        </ul>
      </div>
    </aside>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={`${isActive ? "active" : ""} nav-item`}>
      <Link
        to={to}
        {...props}
        style={{ color: `${isActive ? "#c30608" : ""}` }}
      >
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
