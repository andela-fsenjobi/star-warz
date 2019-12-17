import { combineReducers } from "redux";

import movies from "./movies";
import movieId from "./movieId";
import characters from "./characters";
import movieCharacters from "./movieCharacters";

const rootReducer = combineReducers({ movies, movieId, characters, movieCharacters });

export default rootReducer;
