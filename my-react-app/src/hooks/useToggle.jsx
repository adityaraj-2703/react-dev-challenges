import { useState } from "react";

export const useToggle = (initialValue=false) =>{
    const [state,setState] = useState(false);
    const toggle = () => {
        setState((prev)=>!prev)
    };

    return [state, toggle];

};