import { createContext, useState } from "react";

const CounterContext = createContext();
function ContextProvider({children}){

    const[counter,setCounter] = useState(0);

    <CounterContext value={{counter,setCounter}}>
        <children/>
    </CounterContext>
}

export default ContextProvider;

