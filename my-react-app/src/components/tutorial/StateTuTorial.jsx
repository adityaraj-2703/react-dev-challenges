import React from 'react'
import { useState } from 'react';

const StateTuTorial = () => {
  const [name,setName] = useState();
  const [show,setShow] = useState(true);
  const [counter,setCounter] = useState(0); 
  const changeVal = (e) =>{
    
    setName(e.target.value);
  }
  const toggle = () =>{
    setShow(!show);
  }
  return (
    <div>
      {name}
      <button onClick={()=>{
        setShow(!show);
      }}>Show/Hide</button>
      {show && <p>This is Aditya</p>}
      <input type='text' onChange={changeVal}/>
      <br/>
      {counter}
      
      <button onClick={()=>{
        setCounter(counter+1);
      }}>
        Increment
      </button>
      <button onClick={()=>{
        setCounter(counter-1);
      }}>
        Decrement
      </button>
      <button onClick={()=>{
        setCounter(0);
      }}>
        reset
      </button>
    </div>
  )
}

export default StateTuTorial;