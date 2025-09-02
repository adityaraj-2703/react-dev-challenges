import React, { useEffect } from 'react'
import Axios from 'axios';
import { useState } from 'react';



const FetchDataFromAPI = () => {

    // fetch("https://catfact.ninja/fact")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //     });
    const [catFact,setCatFact] = useState("");

    const fetchCatFact = () =>{
        Axios.get("https://catfact.ninja/fact")
        .then((res)=>{
            console.log(res.data);
            setCatFact(res.data.fact);
        });
    }

    useEffect(()=>{
        fetchCatFact();
    },[])
  return (
    <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
    
  )
}

export default FetchDataFromAPI