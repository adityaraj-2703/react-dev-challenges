const round = (number) => Math.round(number * 100) / 100;
// currying
const monitorReducerEnhancer = (createStore) => {
  return (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      // new reducer logic
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log("reducer process time:", diff, start, end);

      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };
};

export default monitorReducerEnhancer;

// foo(1, 2, 3);

// foo(1)(2)(3);

// function sum(a, b) {
//   return a + b;
// }

// // sum(1,2); -> sum(1)(2)

// function curry(f) {
//   // curry(f) does the currying transform
//   return function (a) {
//     // <- function a
//     return function (b) {
//       // <- function b
//       return f(a, b); // <- original function
//     };
//   };
// }

// const curriedSum = curry(sum);
// const curriedSumB = curriedSum(1);
// const result = curriedSumB(2);

// const functionA = function (a) { // <- 1
//   // <- function a
//   return function (b) {
//     // <- function b
//     return f(a, b); // <- original function
//   };
// };

// const functionB = function (b) { // <- 2
//     // <- function b
//     return f(a, b); // <- original function
//   };

// higher order function
// a function that takes another function as an argument, or it returns another function, or both