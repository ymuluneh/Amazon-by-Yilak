import React, { useContext } from "react";
import { DataContext } from "../../Components/ContextProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./cart.module.css"
import { Typo } from "../Utilitis/action.type";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
 const total = basket.reduce((amount,item)=>{return item.price * item.amount + amount},0)

 const increament = (item)=>{
  dispatch({

    type:Typo.ADD_TO_CART,
    item
  })
 }


 const decreament = (id) => {
   dispatch({
     type: Typo.REMOVE_FROM_BASKET,
     id
   })
 }

  return (
    <section className={classes.container}>
      <div className={classes.cart_container}>
        <h3>Hello</h3>
        <p>Your Shopping Basket</p>
        <hr />
        {basket?.length === 0 ? (
          <p>Opps! No item in your cart</p>
        ) : (
          basket?.map((item, i) => {

            return (
              <section className={classes.cart_product}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />

                <div className={classes.button_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increament(item)}
                  >
                    <FaChevronUp size={30}/>
                  </button>

                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decreament(item.id)}
                  >
                    <FaAngleDown size={30} />
                  </button>
                </div>
              </section>
            );
})
        )}
      </div>

      {basket?.length !==0&&(
        <div className={classes.subtotal}>
          <div>
            <p>subtotal ({basket?.length} items)</p>

            <CurrencyFormat amount={total} />
          </div>
          <span>
            <input type="checkbox" />
            <small>this order contains a gift</small>
          </span>
          <Link to="/payment">continiue to checkout</Link>
        </div>
      )}
    </section>
  );
 
}

export default Cart;
