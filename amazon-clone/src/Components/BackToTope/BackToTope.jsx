import React from 'react'
import classes from "./back.module.css";
import { Link } from 'react-router-dom';

function BackToTope() {
  return (
    <div className={classes.backToTope}>
      <Link to="/">BackToTop</Link>
    </div>
  );
}

export default BackToTope