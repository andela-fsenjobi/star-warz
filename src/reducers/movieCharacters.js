import { actionTypes } from "../actions/actionTypes";
import {
  sortCharacters,
  filterCharacters,
  updateMovieCharacters
} from "../utility";

const initialState = { characters: [], filters: [], totalHeight: 0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTER: {
      return updateMovieCharacters([action.character], state);
    }
    case actionTypes.ADD_CACHED_CHARACTERS: {
      return updateMovieCharacters(action.movieCharacters, state);
    }
    case actionTypes.REFRESH_MOVIE_CHARACTERS:
      return { ...state, refresh: true };
    case actionTypes.SORT_CHARACTERS: {
      const { key } = action;
      const { characters, sortState, key: oldKey } = state;
      return {
        ...state,
        ...sortCharacters({ characters, key, oldKey, sortState }),
        key
      };
    }
    case actionTypes.FILTER_CHARACTERS_BY_GENDER: {
      return { ...state, ...filterCharacters(state, action.gender) };
    }
    default:
      return state;
  }
}
