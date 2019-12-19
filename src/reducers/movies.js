import { actionTypes } from "../actions/actionTypes";
import { sortObjectArray } from "../utility/sorter";

const initialState = { results: [], pending: true };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES: {
      return {
        ...action.movies,
        results: sortObjectArray({
          characters: action.movies["results"],
          key: "release_date",
          oldKey: "release_date",
          sortState: "desc"
        }).characters,
        pending: false
      };
    }
    default:
      return state;
  }
}
