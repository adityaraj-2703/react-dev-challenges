const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action); // <- next middleware or the original store.dispatch function
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export default logger;

/**
 *
 * looger, someOtherLogger (middleware)
 *
 * dispatch action
 *
 * action -> logger (action)
 *
 * logger(action) -> someOhterLogger(action)
 *
 * someOtherLogger(action) -> original store.dispatch(action)
 *
 * reducer(action) -> update state
 *
 *
 */