import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./root-reducers";
import Thunk from "redux-thunk";
import {persistStore} from 'redux-persist';

const middlewares = [logger];

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
  )
);

export const persistor = persistStore(store);
export default {store, persistor};
