import React from 'react';
import { Link } from 'react-router';
import logoMedia from '../../Utility/Other/logo192.png';
const TopNav = () => {
    const menuItems = <>
        <li>
              <Link to="/teachers">Teachers</Link>
            </li>          
            <li>
              <Link to="/students">Students</Link>
            </li>
          </>
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <h1 className="flex items-center text-xl">
            <img src={logoMedia} width={70} alt="Logo" />
            TutionMedia24
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/profile" className="btn">Profile</Link>
        </div>
      </div>
    );
  };
  
  export default TopNav;
 