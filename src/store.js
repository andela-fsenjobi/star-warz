import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
import data from "./data";

const defaultState = { movies: data.movies['results'], characters: data.people['results'] };
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middlewares)
);

export default store;
