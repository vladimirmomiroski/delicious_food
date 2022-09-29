import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../context-food/context-food';
import styles from './NavbarSearchByName.module.css'

export default function NavbarSearchByName() {

    const { input } = styles;
    const { filterByName } = useContext(Context)

    const [nameValue, setNameValue] = useState('')

    useEffect(() => {
        const clearInterval = setTimeout(() => {
              filterByName(nameValue)
        }, 500)

        return () => {
            clearTimeout(clearInterval)
        }
    }, [nameValue])

    const valueHandler = (e) => {
         setNameValue(e.target.value)
    }

  return (
    <>
    <input className={input} value={nameValue} type="text" placeholder='Search by name...' onChange={valueHandler} />
    </>
  )
}
