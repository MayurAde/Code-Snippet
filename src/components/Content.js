import React from 'react'
import style from "./Content.module.css"
import Code from './Code'

export default function Content() {
    return (
        <main className={style.content}>
            <Code></Code>
        </main>
      )
}
