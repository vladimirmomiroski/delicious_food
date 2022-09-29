import React from 'react'
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import styles from './FooterIcons.module.css'


export default function FooterIcons() {

   

  return (
    <div className={styles['icons']}>
    <a className={styles['icons-link']} href="https://www.facebook.com/" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faFacebookF}/>
    </a>
    <a className={styles['icons-link']} href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faInstagram}/>
    </a>
    <a className={styles['icons-link']} href="https://www.twitter.com/" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faTwitter}/>
    </a>
    <a className={styles['icons-link']} href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faPinterest}/>
    </a>
    </div>
  )
}
