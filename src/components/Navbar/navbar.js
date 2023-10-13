import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import msg from "../../assets/msg.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" className="Logo" />
      </a>
      <div className="menu">
        <a href="/" class="menuItem">
          Home
        </a>
        <Link to="/about" class="menuItem">
          About
        </Link>
        <Link to="/skill" class="menuItem">
          Skills
        </Link>
        <Link to="/work" class="menuItem">
          Work
        </Link>
      </div>
      <a href="#contact" className="msgbtn">
        <img src={msg} alt="Message" className="msgimg" />
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
