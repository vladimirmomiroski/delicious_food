import React from 'react'
import styles from './Navbar.module.css'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import NavbarSearchByName from './NavbarSearchByName/NavbarSearchByName'
import NavbarWrapper from './NavbarWrapper/NavbarWrapper'

export default function Navbar() {
  return (
    <nav className={styles['nav-container']}>
        <NavbarWrapper>
        <NavbarLogo/>
        <NavbarSearchByName/>
        </NavbarWrapper>
    </nav>
  )
}
