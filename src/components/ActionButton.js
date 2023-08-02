import React from 'react'
import style from "./ActionButton.module.css"
export default function ActionButton(props) {
    const buttonMapper ={"close": style.close, "minimize": style.close, "zoom":style.zoom}

  return (
    <mark className={style.action + " " + buttonMapper[props.actionType]}>
        
    </mark>
  )
}
