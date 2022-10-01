import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../context-food/context-food';
import styles from './NavbarSearchByName.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function NavbarSearchByName() {

    const { filterByName } = useContext(Context)

    const [nameValue, setNameValue] = useState('')

    useEffect(() => {
        const clearInterval = setTimeout(() => {
              filterByName(nameValue)
        }, 600)

        return () => {
            clearTimeout(clearInterval)
        }
    }, [nameValue])

    const valueHandler = (e) => {
         setNameValue(e.target.value)
    }

  return (
    <div className={styles['search-input-wrapper']}>
    <input className={styles['input']} value={nameValue} type="text" placeholder='Search by name...' onChange={valueHandler}/>
    <FontAwesomeIcon className={styles['search-icon']} icon={faSearch}/>
    </div>
  )
}
