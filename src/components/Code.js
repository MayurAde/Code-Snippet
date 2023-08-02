import React, {useEffect} from 'react'
import Prism from 'prismjs'; // Import Prism library

import style from './Code.module.css'
import CodeLine from './CodeLine';

export default function Code() {



  return (

   <div className={`${style.code} ${style.preserve_whitespace}`}>
      
      <CodeLine></CodeLine>
     
    
  </div>
  )
}
