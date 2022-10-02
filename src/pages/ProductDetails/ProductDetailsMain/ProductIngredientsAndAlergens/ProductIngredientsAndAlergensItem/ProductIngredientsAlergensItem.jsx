import React from 'react'
import styles from './ProductIngredientsAlergensItem.module.css'

export default function ProductIngredientsAndAlergensItem({ list, image, title}) {

  return (
    <div className={styles['ingredients-alergens-wrapper']}>
        <h2 className={styles['ingredients-alergens-title']}>{title}</h2>
        <img className={styles['ingredients-alergens-image']} src={image} alt={title} />
        <div className={styles['ingredients-alergens-items-wrapper']}>
        {list && list.map((item, idx) => (
          <div className={styles['ingredient-alergens-item']} key={idx}>{item.split(':')[1]}</div>
        ))}
        </div>
    </div>
  )
}
