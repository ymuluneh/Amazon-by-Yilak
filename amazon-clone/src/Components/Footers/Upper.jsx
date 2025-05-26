import React from 'react'
import classes from "./footer.module.css"
import { Link } from 'react-router-dom';


function Upper() {
  return (
    <div className={classes.container}>
      <div className={`row ${classes.row}`}>
        <div className="col">
          <h5>Get to Know Us</h5>
          <ul>
            <li>
              <Link to="#"> Careers Blog </Link>
            </li>
            <li>
              <Link to="#"> About Amazon </Link>
            </li>
            <li>
              <Link to="#">Investor Relations</Link>
            </li>
            <li>
              <Link to="#">Amazon Devices</Link>
            </li>
            <li>
              <Link to="#"> Amazon Science</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5>Make Money with Us</h5>
          <ul>
            <li>
              <Link to="#">Make Money with Us</Link>
            </li>
            <li>
              <Link to="#">Sell products on Amazon</Link>
            </li>
            <li>
              <Link to="#">Sell on Amazon Business </Link>
            </li>
            <li>
              <Link to="#">Sell apps on Amazon </Link>
            </li>
            <li>
              <Link to="#"> Become an Affiliate</Link>
            </li>
            <li>
              <Link to="#">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="#">Self-Publish with Us</Link>
            </li>
            <li>
              <Link to="#"> Host an Amazon Hub</Link>
            </li>
            <li>
              <Link to="#"> See More Make Money with Us</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5>Amazon Payment</h5>
          <ul>
            <li>
              <Link to="#">Products Amazon</Link>
            </li>
            <li>
              <Link to="#">Business Card</Link>
            </li>

            <li>
              <Link to="#"> Shop with Points</Link>
            </li>
            <li>
              <Link to="#"> Reload Your Balance</Link>
            </li>

            <li>
              <Link to="#"> Amazon Currency Converter</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5> Let Us Help You</h5>
          <ul>
            <li>
              <Link to="#">Amazon and COVID-19</Link>
            </li>

            <li>
              <Link to="#">Your Account</Link>
            </li>
            <li>
              <Link to="#"> Your Orders</Link>
            </li>
            <li>
              <Link to="#">Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link to="#"> Returns & Replacements</Link>
            </li>
            <li>
              <Link to="#">Manage Your Content and Devices</Link>
            </li>
            <li>
              <Link to="#"> Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Upper