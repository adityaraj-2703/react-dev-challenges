import React from 'react'
import { useState, useEffect } from 'react'
import { Text } from './Text'


const TextDisplay = () => {
    const [showText,setShowText] = useState(false);
  return (
    <div>
        <button onClick={()=>{setShowText(!showText)}}> Show Button</button>
        {showText && <Text/>}
    </div>
  )
}

export default TextDisplay