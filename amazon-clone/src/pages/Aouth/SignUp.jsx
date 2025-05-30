import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilitis/firebase";
import { useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // ✅ Check if the user is already registered
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        setError("Email is already registered. Please sign in instead.");
        return;
      }

      // ✅ Create new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // ✅ Set display name
      await updateProfile(userCredential.user, {
        displayName: `${fName} ${lName}`,
      });

      navigate("/"); // Go to home after successful signup
    } catch (err) {
      setError("account aready registered. please sign in.");
      console.error("Signup error:", err);
    }
  };

  return (
    <section>
      <div className={classes.logo}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </div>
      <div className={classes.form_container}>
        <form onSubmit={handleSignUp}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
            />
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
            <button type="submit">Create your Amazon account</button>
          </div>
        </form>

        <p>
          By continuing, you agree to{" "}
          <Link to="#">Amazon's Conditions of Use</Link> and{" "}
          <Link to="#">Privacy Notice.</Link>
        </p>

        {error && <div className={classes.error}>{error}</div>}

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/auth")} className={classes.signUp}>
            Sign in
          </span>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
