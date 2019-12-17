import { createStore } from "redux";

import rootReducer from "./reducers/index";
import data from "./data";

const defaultState = { movies: data['results'] };

const store = createStore(rootReducer, defaultState);

export default store;
