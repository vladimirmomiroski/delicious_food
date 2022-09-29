import React from "react";
import Card from "../../../../components/UI/Card/Card";
import styles from './HomeProductsItem.module.css'
import HomeProductsItemTitle from "./HomeProductsItemTitle.jsx/HomeProductsItemTitle";

export default function HomeProductsItem({ product }) {
  const { product_name_fr, image_front_thumb_url, brands, countries } = product;
  const allCountries = countries.split(",");

  const { container } = styles;

  return (
    <Card>
      <div className={container}>
        <HomeProductsItemTitle image={image_front_thumb_url} title={product_name_fr} />
        <p>{brands}</p>
      </div>
    </Card>
  );
}
