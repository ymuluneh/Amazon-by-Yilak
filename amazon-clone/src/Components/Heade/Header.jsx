import React, { useContext } from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "../LowerHeader/LowerHeader";
import { DataContext } from "../ContextProvider/DataProvider";
import { Link } from "react-router-dom";
import { auth } from "../../pages/Utilitis/firebase";

function Header() {
  const [{user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)


  return (
    <section className={classes.header_position}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </Link>
          <div className={classes.delivery_location}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <div className={classes.search_icon}>
            <BsSearch size={25} />
          </div>
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <Link className={classes.language} to="">
            <img src="https://www.fotw.info/images/e/et-plain.gif" alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello, {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign in</p>
                  <span>Account & list</span>
                </>
              )}
            </div>
          </Link>
          [=]
          {/* order */}
          <Link to="/payment">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>
          {/* cart */}
          <Link to="/cart">
            <div className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </div>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
