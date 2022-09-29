import React from 'react'
import styles from './Card.module.css'

export default function Card({children}) {

    const { card } = styles;

  return (
    <div className={card}>
        {children}
    </div>
  )
}
