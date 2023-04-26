import React, { useEffect, useState } from "react";
import "./memberLogin.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <>
      <Navbar />

      <div className="memberLogin">
        <div className="login mb-28 w-1/2 ml-48 ">
          <h1 className="text-2xl font-semibold">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              required={true}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            ></input>
            <input
              type="password"
              name="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            ></input>
            <button className="p-2 pl-24 pr-24 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl " type="submit">
              Login
            </button>
          </form>

          <div>OR</div>
          <Link to="/signup">
            <button className="p-2 pl-36 pr-28 clicablediv bg-blue-500 h-10 rounded-md text-white  text-xl ">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}
