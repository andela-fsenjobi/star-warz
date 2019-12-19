import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { sortObjectArray } from "./utility/sorter";
import rootReducer from "./reducers/index";
import data from "./data";

const defaultState = {
  movies: sortObjectArray({
    characters: data.movies["results"],
    key: 'release_date',
    oldKey: 'release_date',
    sortState: 'desc',
  }).characters,
  characters: []
};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middlewares)
);

export default store;
