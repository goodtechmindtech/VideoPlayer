import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
      <Options />
    </div>
  );
}

export default Navbar;
