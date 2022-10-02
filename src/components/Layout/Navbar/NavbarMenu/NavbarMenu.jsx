import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import styles from './NavbarMenu.module.css'

export default function NavbarMenu() {
  return (
    <FontAwesomeIcon className={styles['navbar-menu-icon']} icon={faPizzaSlice} />
  )
}
