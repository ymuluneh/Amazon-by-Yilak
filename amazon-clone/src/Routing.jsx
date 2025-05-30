import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Aouth/Auth";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Results from "./pages/Results/Results";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Aouth/SignUp";
import Fouro4 from "./pages/Fouro4/Fouro4";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentSecurity from "./pages/PaymentSecurity/PaymentSecurity";

const stripePromise = loadStripe(
  "pk_test_51RTjUZKONHjJ5wOuXk8iNArE2sUj1lU2DYZiGQsgp6YKKGzGxAOMnIq2yPS5EaPXWVKhdkwBKRW8GBf48Cr45UFK00VvUkgIJA"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="orders"
          element={
            <PaymentSecurity
              msg={"Please signin first to continue"}
              redirect={"/orders"}
            >
              <Orders />
            </PaymentSecurity>
          }
        />
        <Route
          path="payment"
          element={
            <PaymentSecurity
              msg={"Please signin first to continue"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </PaymentSecurity>
          }
        />
        <Route path="productS/:productId" element={<ProductDetail />} />
        <Route path="category/:categoryName" element={<Results />} />
      </Route>
      <Route path="*" element={<Fouro4 />} />
    </Routes>
  );
}

export default Routing;
