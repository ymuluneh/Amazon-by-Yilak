import React from 'react'
import classes from "./persenalized.module.css";
import { Link } from "react-router-dom";

function PersonalizedInfo() {
  return (
    <div className={classes.personalizedInfo}>
      <div className="mt-4">
        <h1>See personalized recommendations</h1>
        <button type="button">
          <Link to="/auth">Sign in</Link>
        </button>
        <p>
          New custemer? <Link to="#">Start Here</Link>
        </p>
      </div>
    </div>
  );
}

export default PersonalizedInfo