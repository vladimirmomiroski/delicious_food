import React from "react";
import styles from "./ProductDetailsCountries.module.css";
import ProductDetailsCountryItem from "./ProductDetailsCountryItem/ProductDetailsCountryItem";

export default function ProductDetailsCountries({ countries }) {
  return (
    <>
      <p className={styles['country-title']}>Origin:</p>
      <div className={styles["country-wrapper"]}>
        {countries.map((country, idx) => (
          <ProductDetailsCountryItem key={idx} country={country} />
        ))}
      </div>
    </>
  );
}
