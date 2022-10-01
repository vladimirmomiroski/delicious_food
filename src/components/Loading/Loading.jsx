import React from 'react'
import styles from './Loading.module.css'
import loading from '../../assets/images/loading.png'

export default function Loading() {
  return (
    <img className={styles['loading-image']} src={loading} alt="Loader..." />
  )
}
