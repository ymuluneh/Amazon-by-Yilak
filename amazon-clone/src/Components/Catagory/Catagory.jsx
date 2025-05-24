// components/Category.jsx
import React from "react";
import { CategoryInfo } from "./CatagoryInfo";
import CategoryCard from "./CatagoryCard";
import styles from "./category.module.css";

function Category() {
  return (
    <section className={styles.catagory__container}>
      {CategoryInfo.map((item) => (
        <CategoryCard key={item.id} data={item} />
      ))}
    </section>
  );
}

export default Category;
