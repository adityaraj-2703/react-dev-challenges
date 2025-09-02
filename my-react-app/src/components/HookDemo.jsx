import React, { useState,useEffect, useRef, useCallback } from 'react';

const HookDemo = () => {
    const [counter,setCounter] = useState(0); 

    const[toggle,setToggle] = useState(true); 

    const counterRef = useRef(null);
    console.log("counterRef",counterRef)
    const inputRef = useRef(null);
    console.log("inputRef",inputRef)
    const handleAdd = () => {
        
        setCounter((prevState)=>{
            return prevState+1;
        })
        setCounter((prevState)=>{
            return prevState+1;
        })
        counterRef.current = counter+2;
    }

    //usememo

    const handleToggle = useCallback((value)=>{
        setToggle(!value);
        inputRef.current.focus();
    },[])
    //componentdidmount & componentdidupdate
    useEffect(()=>{
        console.log("in useffect");
    }) 
    const fnRef = useRef(handleToggle);

    console.log(fnRef.current === handleToggle);
    
    
    //component didmount
    useEffect(()=>{
        console.log("in useffect dependency");
    },[]) 

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("Inteval is running");
        },1000)
        return ()=>{
            console.log("clear interval");
            clearInterval(intervalId);
        }
    },[])


    //componentdidmount & componentdidupdate only if value in dependency array changes
    useEffect(()=>{
        console.log("in useffect dependency toggle");
        return ()=>{
            console.log("cleanup for toggle")
        }
    },[toggle]) 


    useEffect(()=>{
        setTimeout(()=>{
            console.log(counter);
        },2000)
    },[])

    
    console.log(counter);
    return (
        <div>
            <input ref={inputRef}/>
            <span>{counter}</span>
        <button onClick={handleAdd}>Increment </button>
        <p>{toggle?"true":"false"}</p>
        <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}
export default HookDemo;