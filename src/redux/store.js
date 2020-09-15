import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./root-reducers";
import Thunk from "redux-thunk";

const middlewares = [logger];

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
