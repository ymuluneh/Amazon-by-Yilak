import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/ContextProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import instance from "../../Api/axios";
import {db} from "../Utilitis/firebase";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const totalPrice = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e.error.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await instance({
        method: "post",
        url: `/payment/create?total=${totalPrice * 100}`,
        responseType: "json",
      });
      
      const clientSecret = response.data.clientSecret;
      // client side payment confirmation(react stripe)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          userEmail: user?.email,
        });
      // clear the basket after payment
     dispatch({
        type: "EMPTY_BASKET",
      });

      setProcessing(false);
      navigate("/orders", {state:{msg:"those are your payed orders"}} );
    } catch (error) {
      console.error("Payment Error:", error);
      setProcessing(false);
    }
   
  };

  return (
    <>
      <div className={classes.Payment_header}> checkout {totalItem} items </div>
      <hr />

      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>payed through stripe</div>
            <div>Ethiopia, Bahir Dar</div>
          </div>
        </div>

        <hr />

        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((items, index) => (
              <ProductCard key={index} product={items} flex={true} />
            ))}
          </div>
        </div>

        <hr />

        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_methods}>
            <div className={classes.payment_detail}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}

                <CardElement onChange={handleChange} />

                <div className={classes.total_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total order</p>
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                </div>
                <button type="submit">
                  {processing ? (
                    <span style={{ color: "white" }}>Processing...</span>
                  ) : (
                    <span style={{ color: "white" }}>Pay</span>
                  )}

                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
