import React, { useState } from "react";
import "./AdminLogin.css";
import { Link, useHistory } from "react-router-dom";

const AdminLogin = () => {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminSigninHandler = (event) => {
    event.preventDefault();
    email === password
      ? History.push("/admindashboard")
      : alert("enter correct details");
  };

  return (
    <div className="adminLogin">
      <Link to="/">
        <img
          className="adminLogin-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="adminLogin-container">
        <h1>Admin Login</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={adminSigninHandler} className="adminLogin-Button">
            Sign In
          </button>
        </form>
        <p>
          By Signing - in You agree that this is just a FAKE amazon Clone made
          by me just for Educational purposes.I dont own any trademarks or
          copyrights.Thank You
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
