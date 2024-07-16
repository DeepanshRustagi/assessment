import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { rootReducer } from "./reducers";

// delete below code before prod
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
//   --------

const sagaMiddleware = createSagaMiddleware();
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(
  rootReducer ||
    (() => {
      return {};
    }),
  enhancer
);
sagaMiddleware.run(rootSaga);

export const getStore = () => store;
