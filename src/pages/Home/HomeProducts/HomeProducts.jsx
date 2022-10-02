import React, { useContext } from 'react'
import styles from './HomeProducts.module.css'
import { Context } from '../../../context-food/context-food'
import HomeProductsItem from './HomeProductsItem/HomeProductsItem'


export default function HomeProducts() {

    const { dataState } = useContext(Context)

  return (
    <div className={styles['products-wrapper']}>
        {dataState.products.map(meal => (
            <HomeProductsItem key={meal._id} product={meal} />
        ))}
    </div>
  )
}
