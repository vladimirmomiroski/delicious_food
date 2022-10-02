import React from 'react'
import styles from './Navbar.module.css'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import NavbarWrapper from './NavbarWrapper/NavbarWrapper'
import NavbarMenu from './NavbarMenu/NavbarMenu'

export default function Navbar() {
  return (
    <nav className={styles['nav-container']}>
        <NavbarWrapper>
        <NavbarLogo/>
        <NavbarMenu/>
        </NavbarWrapper>
    </nav>
  )
}
