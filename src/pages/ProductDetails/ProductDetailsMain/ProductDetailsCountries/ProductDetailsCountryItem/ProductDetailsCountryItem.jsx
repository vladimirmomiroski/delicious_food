import React from 'react'
import styles from './ProductDetailsCountryItem.module.css'

export default function ProductDetailsCountryItem({country}) {

  return (
    <div className={styles['country-box']}>{country}</div>
  )
}
