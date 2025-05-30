import React, { useEffect, useState } from "react";
import { db } from "../Utilitis/firebase";
// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Components/ContextProvider/DataProvider";

import classes from "./order.module.css";
import ProductCard from "../../Components/Products/ProductCard";
import { Link } from "react-router-dom";

function Orders() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }); 
    } else {
    }
  }, [user]);

  return (
    <section className={classes.order_container}>
      <div className={classes.orders}>
        <h2>Your Orders</h2>
        <p>
          {orders?.length === 0
            ? "You have no orders"
            : `You have ${orders?.length} orders`}</p>
        <hr />
        <p><Link to="/">Back to Shop</Link></p>

        <div>
          {orders?.map((order) => (
            <div className={classes.order}>
              
             
              <hr />
              <p>Order ID: {order.id}</p>
             

              <div className={classes.order_items}>
                {order?.data?.basket?.map((item) => (
                  <ProductCard key={item.id} flex={true} product={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Orders;
