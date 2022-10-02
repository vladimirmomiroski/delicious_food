import React, { useContext } from 'react'
import { Context } from '../../../../context-food/context-food'
import styles from './PaginationButton.module.css'

export default function PaginationButton({number, activeClass}) {

    const { sendPageNumberAsDispatch } = useContext(Context)

    const { button, active} = styles
    const numberForPage = number + 1
    const checkActive = activeClass === numberForPage ? active : ''

  return (
    <button onClick={() => sendPageNumberAsDispatch(numberForPage)} className={`${button} ${checkActive}`}>{numberForPage}</button>
  )
}
