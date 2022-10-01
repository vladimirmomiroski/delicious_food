import React from 'react'
import styles from './ProductDetailsInfoItem.module.css'
import ProductIngredientsAndAlergensItem from './ProductIngredientsAndAlergensItem/ProductIngredientsAlergensItem';

export default function ProductDetailsInfoItem({product}) {

    const { wrapper } = styles;

    const { ingredients_original_tags, image_ingredients_small_url, allergens_tags, image_nutrition_small_url } = product;
  
   
  return (
    <div className={wrapper}>
        <ProductIngredientsAndAlergensItem title={'Ingredients'} list={ingredients_original_tags} image={image_ingredients_small_url} />
        <ProductIngredientsAndAlergensItem title={'Alergens'} list={allergens_tags} image={image_nutrition_small_url} />
    </div>
  )
}
