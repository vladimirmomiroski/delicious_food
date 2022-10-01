import React, { useContext } from 'react'
import Button from '../../components/UI/Button/Button'
import { Context } from '../../context-food/context-food'
import styles from './NotFound.module.css'

export default function NotFound() {

    const { goHomeRoute } = useContext(Context);
  return (
    <div className={styles['not-found-wrapper']}>
        <h2 className={styles['not-found-text']}>Oops Page not Found!</h2>
        <Button text={'Return Homepage'} func={goHomeRoute}/>
    </div>
  )
}
