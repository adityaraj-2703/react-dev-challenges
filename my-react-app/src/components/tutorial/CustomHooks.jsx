import React from 'react'
import { useState } from 'react'
import { Text } from './Text' 
import { useToggle } from '../../hooks/useToggle'


const CustomHooks = () => {

    const [isVisible,toggle] = useToggle();

  return (
    <div>
        <button onClick={toggle}> 
            {isVisible ? "Hide":"show"}
        </button>
        {isVisible && <h1>Hidden text</h1>}
        
    </div>
  )
}

export default CustomHooks;