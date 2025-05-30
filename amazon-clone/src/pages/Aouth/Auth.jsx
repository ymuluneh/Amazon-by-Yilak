import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utilitis/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Attempt to sign in
      await signInWithEmailAndPassword(auth, email, password);
      navigate(navStateData.state?.redirect || "/");

    } catch (err) {
      console.error("Sign-in error:", err.code);

      // Handle specific error codes
      switch (err.code) {
        case "auth/user-not-found":
          setError("Account not registered. Please sign up first.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section>
      <Link to="/">
        <div className={classes.logo}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </div>
      </Link>
      <div className={classes.form_container}>
        {navStateData.state?.msg && (
          <small className={classes.error}>{navStateData.state?.msg}</small>
        )}
        <form onSubmit={handleSignIn}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Sign In</button>
          </div>
        </form>
        <p>
          By continuing, you agree to{" "}
          <Link to="#">Amazon's Conditions of Use</Link> and{" "}
          <Link to="#">Privacy Notice.</Link>
        </p>
        {error && <div className={classes.error}>{error}</div>}
        <div className={classes.divider}>
          <hr className={classes.line} />
          <span className={classes.text}>New to Amazon?</span>
          <hr className={classes.line} />
        </div>
        <button
          className={classes.signUp}
          onClick={() => navigate(navStateData.state?.redirect || "/signup")}
        >
          Create your Amazon account
        </button>
      </div>
    </section>
  );
}

export default Auth;
