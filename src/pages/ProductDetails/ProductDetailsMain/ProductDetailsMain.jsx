import React, { useEffect, useState } from 'react'
import styles from './ProductDetailsMain.module.css';
import Card from '../../../components/UI/Card/Card';
import ProductItemTitle from '../../../components/Layout/ProductItemTitle.jsx/ProductItemTitle';
import ProductItemBrands from '../../../components/Layout/ProductItemBrands/ProductItemBrands';
import ProductDetailsCountries from './ProductDetailsCountries/ProductDetailsCountries';
import ProductDetailsInfoItem from './ProductIngredientsAndAlergens/ProductDetailsInfoItem';


export default function ProductDetailsMain({product}) {

    const { product_name, image_url, brands, countries } = product;

    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        if(countries) {
            const allCountries = countries.split(',')
            setAllCountries(allCountries)
        }
    }, [countries])

    
  return (
    <div className={styles['product-details-item']}>
      <ProductItemTitle
            title={product_name}
            image={image_url}
            size={"big"}
          />
           <Card>
        <div className={styles['product-details-box']}>
         <ProductDetailsCountries countries={allCountries}/>
         <ProductDetailsInfoItem product={product}/>
         <ProductItemBrands brands={brands}/>
        </div>
      </Card>
    </div>
  )
}
