import React from "react";
import logo from "../assets/icons/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" className="w-[80px] h-[80px]" />
        </div>
        <div className="btn hidden sm:block">
          <a href="https://www.linkedin.com/in/anam-batool-6a7018345">
            {" "}
            <button>Connect</button>
          </a>
        </div>
        <div className="menu pr-12">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
