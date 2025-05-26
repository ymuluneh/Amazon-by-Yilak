import React from 'react'
import classes from "./persenalized.module.css";

function PersonalizedInfo() {
  return (
    <div className={classes.personalizedInfo}>
      <div className='mt-4'>
        <h1>See personalized recommendations</h1>
        <button type="button">Sign in</button>
        <p>
          New custemer? <a href="#">Start Here</a>
        </p>
      </div>
    </div>
  );
}

export default PersonalizedInfo