import React from 'react'
import styles from './TagItem.module.css'

export default function TagItem({tag}) {
  return (
    <div className={styles['tag-item']}>#{tag}</div>
  )
}
