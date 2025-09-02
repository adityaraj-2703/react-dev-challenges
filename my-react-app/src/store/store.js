import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import carReducer from "../slices/CarSlices.js";
import monitorReducerEnhancer from "../enhancers/monitorReducer.js";
import logger from "../middlewares/logger.js";
import { rtkCarSlice } from "../slices/rtkCarSlice.js";

const rootReducer = combineReducers({
  carReducer,
});

console.log("RTKSLICe",rtkCarSlice);

const middlewareEnhancer = applyMiddleware(logger);
const composedEnhancers = composeWithDevTools(monitorReducerEnhancer, middlewareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);
// const store = myCreateStore(carReducer);

const myCreateStore = (reducer, preloadedState, enhancer) => {
  const store = {
    state: preloadedState,
    callbackFns: [],
  };

  if (enhancer !== undefined) {
    enhancer(myCreateStore);
  }

  store.getState = () => {
    return store.state;
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);

    store.callbackFns.forEach((cb) => cb());
  };

  store.subscribe = (cb) => {
    store.callbackFns.push(cb);

    // unsubscribe
    return () => {
      store.callbackFns.filter((fn) => fn !== cb);
    };
  };

  store.dispatch({ type: "@@INIT" });

  return store;
};

export default store;