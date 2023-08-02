import React from 'react'
import style from './CodeLine.module.css'

export default function CodeLine(props) {
  return (
        <p className={style.code_line}>{props.children}</p>
    )
}
