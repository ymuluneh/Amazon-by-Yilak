import React from 'react'
import classes from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from '../LowerHeader/LowerHeader';

function Header() {
  return (
    <>
        <section className={classes.header_container}>
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </a>
            <div className={classes.delivery_location}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverto</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <a className={classes.language} href="">
              <img src="https://www.fotw.info/images/e/et-plain.gif" alt="" />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <div>
                <p>Sign in</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* order */}
            <a href="">
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </a>
            {/* cart */}
            <a href="">
              <div className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
              </div>
            </a>
          </div>
        </section>
        <LowerHeader />
    </>
  );
}

export default Header