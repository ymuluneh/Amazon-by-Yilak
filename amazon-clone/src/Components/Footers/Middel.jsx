import React from 'react'
import { Link } from 'react-router-dom'; 
import { FaGlobe } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import classes from "./footer.module.css";

function Middel() {
  return (
    <div className={classes.midle_container}>
      <div className={classes.midle}>
        <div className={classes.logo}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </div>

        <div className={classes.FaGlobe}>
          <p>
            <FaGlobe />
          </p>
          <p>English</p>
        </div>
        <div className={classes.FaGlobe}>
          <p>
            {" "}
            <FiDollarSign />
          </p>
          <p> USD U.S Dollar</p>
        </div>

        <Link className={classes.FaGlobe} to="">
          <img src="https://www.fotw.info/images/e/et-plain.gif" alt="" />
          Ethiopia
        </Link>
      </div>
    </div>
  );
}

export default Middel