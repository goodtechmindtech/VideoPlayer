import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import GtmLogo from "../../assets/Rectangle 2.png";

function Navbar() {
  const handleLogout = () => {};

  const Options = () => {
    return (
      <div className="navbar-options">
        <Link to="/"> Home </Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/login" className="loginButtonNAv">
          Login / Signup
        </Link>
      </div>
    );
  };

  return (
    <div className="navbar">
      <img src={GtmLogo} alt="" />
      <Options />
    </div>
  );
}

export default Navbar;
