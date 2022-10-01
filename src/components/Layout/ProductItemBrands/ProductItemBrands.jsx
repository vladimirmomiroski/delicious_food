import React from 'react'
import styles from './ProductItemBrands.module.css'

export default function ProductItemBrands({brands}) {

    const { brand } = styles;

  return (
    <div className={brand}>{brands}</div>
  )
}
