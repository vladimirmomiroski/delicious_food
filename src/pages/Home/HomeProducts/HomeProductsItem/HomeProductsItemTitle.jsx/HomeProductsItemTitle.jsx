import React from "react";
import styles from "./HomeProductsItemTitle.module.css";

export default function HomeProductsItemTitle({ image, title }) {

  return (
    <div className={styles['product-info']}>
      <p className={styles['product-title']}>{title}</p>
      <img src={image} alt="product" />
    </div>
  );
}
