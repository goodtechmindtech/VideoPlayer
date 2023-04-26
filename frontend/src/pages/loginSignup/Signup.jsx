import React, { useEffect, useState } from "react";
import "./memberRegister.css";
import { Link, useNavigate } from "react-router-dom";

import Loader from "../../components/Loader/Loader";

import Navbar from "../../components/Navbar/Navbar";

export default function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: "",
    reEnterPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />

      <div className="memberRegister">
        <div className="register w-1/2 h-96 ml-24">
          <h1 className="text-2xl font-semibold">Signup</h1>
          <form onSubmit={handleRegister}>
            <input type="text" required={true} name="username" value={user.username} placeholder="Enter Name" onChange={handleChange}></input>
            <input type="text" required={true} name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>

            <input type="password" required={true} name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <input
              type="password"
              required={true}
              name="reEnterPassword"
              value={user.reEnterPassword}
              placeholder="Re-enter Password"
              onChange={handleChange}
            ></input>

            <button className="p-2 pl-24 pr-24 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl ">Register</button>
          </form>
          <div>OR</div>
          <Link to="/login">
            <button className="p-2 pl-36 pr-28 clicablediv bg-blue-500 h-10 rounded-md text-white  text-xl ">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}
