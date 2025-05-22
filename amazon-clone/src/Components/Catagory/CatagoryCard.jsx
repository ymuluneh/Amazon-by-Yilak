
import React from "react";
import styles from "./category.module.css";
import {Link} from "react-router-dom"

function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={styles.catagory}>
      <Link to={`/category/${data.category}`}>
        <h3>{data.category}</h3>
        <img src={data.image} alt={data.category} />

        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard; 
