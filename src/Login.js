import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      console.log(auth);
      history.push("/");
    });
  };

  return (
    <React.Fragment>
    <div className="login">
      <Link to="/">
        <div className="login__LogoLink">
          <span className="login__Logo" alt="Amazon" />
          <span className="login__LogoDomain" alt="Amazon" />
        </div>
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in your are agree to the AMAZON FAKE CLONE Conditions of
          use & Sale. Please see our Pravicy Notice, Our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
      </div>
      <div class="a_divider a_divider_break"><h5>New to Amazon?</h5></div>
        <Link to='/register'>
        <button  className="login__registerButton">
          Create Your Amazon Account
        </button>
        </Link>
    </div>
    </React.Fragment>
  );
}

export default Login;
