import React from 'react'
import styles from './Button.module.css'

export default function Button({text, func}) {

    const { button } = styles;
  return (
    <button onClick={func} className={button}>{text}</button>
  )
}
