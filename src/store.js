import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const defaultState = {
  movies: { results: [], pending: true },
  characters: {}
};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middlewares)
);

export default store;
