import React, { useEffect, useState } from 'react'
import { MyStore }  from '../main.tsx'

const useMySelector = (selector) => {
const {store} = useContext(MyStore)
const [,setState] = useState(0);

useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
        setState(prev=>prev+1)
    })
    return unsubscribe
},[store])
  return (
    selector(store.getState())
  )
}

export default useMySelector