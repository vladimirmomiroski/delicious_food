import React from 'react'
import styles from './Button.module.css'

export default function Button() {

    const { button } = styles;
  return (
    <div className={button}>View Product</div>
  )
}
