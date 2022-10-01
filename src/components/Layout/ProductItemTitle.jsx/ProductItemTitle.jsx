import React from "react";
import styles from "./ProductItemTitle.module.css";

export default function ProductItemTitle({ image, title, size }) {

  const whichSize = size === 'big' ? 'big' : 'small'
  return (
    <div className={styles['product-info']}>
      <p className={styles['product-title']}>{title}</p>
      <img className={styles[whichSize]} src={image} alt="product" />
    </div>
  );
}
