import React, { useState } from "react";
import logo from "../images/Logo .svg";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
      <CiMenuBurger size={35} style={{ color: 'black' }}  />
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
      
      </ul>
    </nav>
  );
};

export default Nav;