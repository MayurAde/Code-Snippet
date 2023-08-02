import React, {useEffect} from 'react'
import Prism from 'prismjs'; // Import Prism library

import style from './Code.module.css'

export default function Code() {
  useEffect(() => {
    // Initialize Prism.js after the component has mounted
    Prism.highlightAll();
  }, []);


  return (
    <div className={style.code}>
   <div className={`${style.code} ${style.preserve_whitespace}`}>
      print("Hello World")
    </div>
  </div>
  )
}
