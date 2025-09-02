import React from 'react'
import { useState } from 'react';


/*
    event propagation
    bubbling child->parent
    capturing parent->child

    try onclick capture > parent then clid will be printed
*/
/**
 * 
 *  
    render state change, props change
    trigger:initial render,state change,
    render:call the component,
    commit: change the dom

 */

const foo = () =>{
    let count = 1;
    count++;
    return count;
}
const count1 = foo();
const count2 = foo();

console.log(count1, count2);
const list = ["Adam","Zhou","Aditya"]
console.log(typeof foo, typeof foo());
const EventDemo = ({onClickButton}) => {
    const [count1,setCount] = useState(0);

    console.log("eventDemo component is rendering",
        count1, //from react component
        document.querySelector("#countSpan")?.innerHTML); // from dom

    let count =0;
    count++;
    const handlParentClick = ()=>{
        console.log("parent is clicked")
    }
    const handleIncrement = ()=>{
        setCount(count1+1);
        console.log(typeof useState);
    }
    
  return (
    <div onClick={handlParentClick}>
        <button id="123" onClick={onClickButton}>click Me!</button>
        {list.map(name=>{
            return <button onClick={()=>onClickButton(name)}>Click{name}</button>
        })}
        <div>
            <span id='countSpan'>{count1}</span>
            <button id="125" onClick={handleIncrement}>click Me!</button>
        </div>
        
    </div>
  )
}

export default EventDemo;