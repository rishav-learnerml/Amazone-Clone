import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./login.css";

function Login() {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //frebase save me in login :P
    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        })
        .catch(error => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //frebase save me in register :P

    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //user created succesfully
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch((error=>{
            alert(error.message)
        }))
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
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
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p className="login__terms">
          By continuing, you agree to Amazon's{" "}
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">
            Privacy Notice
          </a>
          .
        </p>

        <h2>
          <span>New to Amazon?</span>
        </h2>

        <button className="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
