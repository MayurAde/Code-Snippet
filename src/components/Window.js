import React from 'react'
import Tab from './Tab'
import Content from './Content'
import style from "./Window.module.css"

export default function Window() {
  return (
    <div className={style.window}>
      <Tab></Tab>
      <Content></Content>
    </div>
  )
}
