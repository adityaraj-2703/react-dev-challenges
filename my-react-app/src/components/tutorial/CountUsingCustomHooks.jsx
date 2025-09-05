import React from 'react'
import { useCount } from '../../hooks/useCount'

const CountUsingCustomHooks = () => {
    const {count,increment,decrement,reset} = useCount(0);
  return (
    <div>
        {count}
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        reset
      </button>
    </div>
  )
};

export default CountUsingCustomHooks