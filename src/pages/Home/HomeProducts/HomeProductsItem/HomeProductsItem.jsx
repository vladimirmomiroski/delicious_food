import React from "react";
import Button from "../../../../components/UI/Button/Button";
import Card from "../../../../components/UI/Card/Card";
import styles from './HomeProductsItem.module.css'
import HomeProductsItemCountry from "./HomeProductsItemCountry/HomeProductsItemCountry";
import HomeProductsItemTitle from "./HomeProductsItemTitle.jsx/HomeProductsItemTitle";

export default function HomeProductsItem({ product }) {
  const { product_name_fr, image_front_thumb_url, brands, countries } = product;
  const allCountries = countries.split(",");

  return (
    <Card>
      <div className={styles['container']}>
        <HomeProductsItemTitle image={image_front_thumb_url} title={product_name_fr} />
        <div className={styles['country-wrapper']}>
        {allCountries.map((country, idx) => (
          <HomeProductsItemCountry key={idx} country={country}  />
        ))}
        </div>
        <p>{brands}</p>
       <Button/>
      </div>
    </Card>
  );
}
