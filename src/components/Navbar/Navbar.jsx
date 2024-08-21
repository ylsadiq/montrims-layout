import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.css"; // Import the CSS file
import LinkList from "../LinkList";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-semibold">Montrims</span>
            </div>
            <div className="hidden md:block">
              <div className="dropdown">
                <button className="dropbtn text-white ms-5">Matalan</button>
                <div className="dropdown-content">
                <LinkList />
                  
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white cursor-pointer" onClick={handleOnClick}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
