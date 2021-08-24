import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const signUpHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.svg"
          alt=""
        />
      </Link>
      <form className="login__container" onSubmit={loginHandler}>
        <p className="login__signIn">Sign-In</p>
        <label htmlFor="input" className="login__text">
          Email or mobile phone number
        </label>
        <input
          id="input"
          type="text"
          name="input"
          className="login__input"
          placeholder="Email"
          value={email}
          onChange={emailChangeHandler}
        />
        <input
          id="input"
          type="password"
          className="login__input"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
        />
        <button className="login__continue" type="submit">
          Continue
        </button>
        <p className="login__help">
          By continuing, you agree to Amazon's <a href="/">Conditions of Use</a>{" "}
          and <a href="/">Privacy Notice</a> .
        </p>
        <a className="login__needHelp" href="/">
          Need help
        </a>
      </form>
      <div className="login__question">New to Amazon?</div>
      <button className="login__createAccount" onClick={signUpHandler}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
