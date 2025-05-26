import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Button } from "@mui/material";
import classes from "./products.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../ContextProvider/DataProvider";
import { Typo } from "../../pages/Utilitis/action.type";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { id, image, title, price, rating, description } = product;


  const [{ basket }, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Typo.ADD_TO_CART,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${classes.Product_card} ${
        flex ? classes.Product_flexed : ""
      }`}
    >
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div>
        <div>
          <h3>{title}</h3>
          {renderDesc && <div style={{ maxWidth: "90%" }}>{description}</div>}
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

        {renderAdd && (
          <Button
            variant="contained"
            onClick={addToCart}
            className={classes.button}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
