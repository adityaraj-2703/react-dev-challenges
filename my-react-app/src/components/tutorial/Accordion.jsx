import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';

const Accordion = () => {
    const [recipes,setRecipes] = useState([]);
    const [openTypes, setOpenTypes] = useState(new Set());
    const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setRecipes(res.data.recipes);
      
      
    } catch (e) {
      console.log(e.message || "Request failed");
    }
  };
  useEffect(()=>{
    fetchData()
    

  },[]);

  const toggle = (type) => {
    setOpenTypes((prev)=>{
        const next = new Set(prev);
        if(next.has(type)){
            next.delete(type);
        }
        else{
            next.add(type);
        }
        return next;
    })
}
  
    const myMap = new Map();
    recipes.forEach((recipe)=>{
        const types = Array.isArray(recipe.mealType)?recipe.mealType:["Other"];
        types.forEach((t)=>{
            if(!myMap.has(t)) myMap.set(t,[]);
            myMap.get(t).push(recipe.name);
        })
    });
    console.log("map");
    console.log(myMap,"map");
    for (const [key, value] of myMap.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
    }
  return (
    
    <div>Accordion
       <ul>
  {Array.from(myMap.entries()).map(([key, arr]) => (
    <li key={String(key)}>
      {/* header row: click to toggle */}   {/* <— NEW */}
      <div onClick={() => toggle(key)} style={{ cursor: "pointer" }}>
              {String(key)} ({arr.length})
      </div>
      {openTypes.has(String(key)) && (
              <ul>
                {arr.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
    </li>

  ))}
</ul>
        
    </div>
    
  )
}

export default Accordion