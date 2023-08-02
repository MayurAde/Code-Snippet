import React from 'react'
import style from "./Tab.module.css"
import ActionButton from './ActionButton'
export default function Tab() {
  return (
    <header className={style.tab}>
        <ActionButton actionType="close"></ActionButton>
        <ActionButton actionType="minimize"></ActionButton>
        <ActionButton actionType="zoom"></ActionButton>
    </header>
  )
}
