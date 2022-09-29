import React from 'react'
import styles from './Footer.module.css'
import FooterIcons from './FooterIcons/FooterIcons'

export default function Footer() {

    const year = new Date().getFullYear()
  return (
    <footer className={styles['footer']}>
        <div className={styles['footer-wrapper']}>
        <p className={styles['footer-copyright']}>Goodies&#169; {year} </p>
       <FooterIcons/>
        </div>
    </footer>
  )
}
