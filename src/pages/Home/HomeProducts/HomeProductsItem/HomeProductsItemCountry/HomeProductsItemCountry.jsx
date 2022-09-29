import React from 'react'
import styles from './HomeProductsItemCountry';

export default function HomeProductsItemCountry({country}) {
  return (
    <div className={styles['country-wrapper']}>{country} AF</div>
  )
}
