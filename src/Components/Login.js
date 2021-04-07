import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        History.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const registerHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        History.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>
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
          <button
            type="submit"
            onClick={signinHandler}
            className="login-signinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing - in You agree that this is just a FAKE amazon Clone made
          by me just for Educational purposes.I dont own any trademarks or
          copyrights.Thank You
        </p>
        <button onClick={registerHandler} className="login-registerButton">
          Create a new Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
