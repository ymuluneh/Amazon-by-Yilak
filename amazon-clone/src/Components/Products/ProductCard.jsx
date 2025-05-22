import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Button } from "@mui/material";
import classes from "./products.module.css"


function ProductCard({ product }) {
  const { id, image, title, price, rating } = product;

  return (
    <div className={classes.Product_card}>
      <a href={`/product/${category}`}>
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
      </div>

      {rating && (
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count} reviews</small>
        </div>
      )}

      <div>
        <CurrencyFormat amount={price} />
      </div>
      <Button variant="contained" className={classes.button}>
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
