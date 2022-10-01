import React from "react";
import Button from "../../../../components/UI/Button/Button";
import Card from "../../../../components/UI/Card/Card";
import styles from './HomeProductsItem.module.css'
import ProductItemTitle from "../../../../components/Layout/ProductItemTitle.jsx/ProductItemTitle";
import { useNavigate } from "react-router-dom";
import ProductItemBrands from "../../../../components/Layout/ProductItemBrands/ProductItemBrands";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLandmark} from '@fortawesome/free-solid-svg-icons'

export default function HomeProductsItem({ product }) {

  const navigate = useNavigate()

  const { _id, product_name, image_url, brands, countries } = product;
  const country = countries.split(",")[0];
  

  return (
    <Card>
      <div className={styles['container']}>
        <ProductItemTitle image={image_url} title={product_name} size={'small'} />
        <div className={styles['country-wrapper']}>
        <p className={styles['country-text']}><FontAwesomeIcon className={styles['country-icon']} icon={faLandmark}/> - {country}</p>
        </div>
        <ProductItemBrands brands={brands} />
       <Button text={'See Product'} func={() => navigate(`/ProductDetails/${_id}`)}/>
      </div>
    </Card>
  );
}
