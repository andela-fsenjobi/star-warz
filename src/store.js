import { createStore, compose } from "redux";

import rootReducer from "./reducers";
import data from "./data";

const defaultState = { data };

const store = createStore(rootReducer, defaultState);

export default store;
