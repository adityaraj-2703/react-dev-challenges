import Axios from 'axios';
import { useEffect, useState } from 'react';

const PredictAge = () => {
    const [data,setData] = useState({});
    const [name,setName] = useState("");
    
    const fetchPredictAge = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res)=>{
            setData(res.data);
        });
    };
    // useEffect(()=>{
    //     fetchPredictAge("Aditya")
    // },[]);
  return (
    <div>
        <input placeholder='write name' onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={fetchPredictAge}>
            Predict Age
        </button>
        <p>Count: {data?.count}</p>
        <p>Name: {data?.name}</p>
        <p>Predicted Age: {data?.age}</p>
    </div>
  )
}

export default PredictAge