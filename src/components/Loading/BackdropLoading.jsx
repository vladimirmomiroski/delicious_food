import React from 'react'
import styles from './BackdropLoading.module.css'

export default function BackdropLoading() {

    const { backdrop } = styles
  return (
    <div className={backdrop}></div>
  )
}
