// components/CategoryCard.jsx
import React from "react";
import styles from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={styles.catagory}>
      <a href="/">
        <h3>{data.category}</h3>
        <img src={data.image} alt={data.category} />

        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard; 
