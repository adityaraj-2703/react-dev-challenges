import React, { useState } from 'react'
import withCounter from '../../hoc/withCounter'

let state = 0;
let snapshot = state;
state++;
console.log("snapshot", state, snapshot);

const Counter = ({ counter, handleIncrement, handleDecrement }) => {
  //   const [counter, setCounter] = useState(0);
  //   const handleIncrement = () => {
  //     setCounter((prev) => {
  //       return prev + 1;
  //     });
  //     setTimeout(() => {
  //       console.log("timeout", counter);
  //     }, 500);
  //   };

  //   console.log(3, counter);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

const CounterWithHOC = withCounter(Counter);
export default CounterWithHOC;