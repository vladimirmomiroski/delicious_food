import React from 'react'
import styles from './TagItem.module.css'

export default function TagItem({tag}) {
  
  const tagToLower = tag.toLowerCase()
 
  return (
    <div className={styles['tag-item']}>#{tagToLower}</div>
  )
}
