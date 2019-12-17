import { combineReducers } from "redux";

import movies from "./movies";
import movieId from "./movieId";

const rootReducer = combineReducers({ movies, movieId });

export default rootReducer;
