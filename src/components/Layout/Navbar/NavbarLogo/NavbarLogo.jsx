import React, { useContext } from 'react'
import styles from './NavbarLogo.module.css'
import logo from '../../../../assets/images/logo.png'
import { Context } from '../../../../context-food/context-food'

export default function NavbarLogo() {

    const { goHomeRoute } = useContext(Context)

  return (
    <div onClick={goHomeRoute} className={styles['logo-wrapper']}>
        <img className={styles['logo-image']} src={logo} alt="Food app logo" />
    <h1 className={styles['logo-title']}>Cooking App</h1>
    
    </div>
  )
}
