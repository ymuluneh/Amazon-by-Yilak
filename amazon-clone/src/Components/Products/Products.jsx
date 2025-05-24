import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./products.module.css"

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res)=>{
        setProducts(res.data)
      }).catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <section className={classes.product_container}>
      {products.map((singleItem) => (
        <ProductCard product={singleItem} key={singleItem.id} renderAdd ={true} />
      ))}
    </section>
  );
}

export default Products;
