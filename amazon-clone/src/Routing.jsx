import React from "react";
import {Route, Routes } from "react-router-dom"; 
import SignUp from "./pages/Aouth/SignUp";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Results from "./pages/Results/Results";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home"
import Fouro4 from "./pages/Fouro4/Fouro4";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment" element={<Payment />} />
        <Route path="product" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Route>
      <Route path="*" element={<Fouro4 />}/>
    </Routes>
  );
}

export default Routing;
