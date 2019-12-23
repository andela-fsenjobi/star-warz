import { actionTypes } from "../actions/actionTypes";
import { sortMovies } from "../utility";

const initialState = { results: [], pending: true };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES: {
      return {
        ...action.movies,
        results: sortMovies(action.movies["results"]),
        pending: false
      };
    }
    default:
      return state;
  }
}
