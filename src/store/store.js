/**
 * Initalize the store and apply all the middlewares
 */

import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

let middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const loggerMiddleware = createLogger();
  middlewares = [...middlewares, loggerMiddleware];
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;
