import { actionTypes } from "../actions/actionTypes";
import { sortObjectArray } from "../utility/sorter";
import { filterObjectArray } from "../utility/filter";
import { decorateMovieCharacters } from "../utility/decorator";

const initialState = { characters: [], filters: [], totalHeight: 0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTER: {
      return decorateMovieCharacters([action.character], state);
    }
    case actionTypes.ADD_CACHED_CHARACTERS: {
      return decorateMovieCharacters(action.movieCharacters, state);
    }
    case actionTypes.REFRESH_MOVIE_CHARACTERS:
      return { ...state, refresh: true };
    case actionTypes.SORT_CHARACTERS: {
      const { key } = action;
      const { characters, sortState, key: oldKey } = state;
      return {
        ...state,
        ...sortObjectArray({ characters, key, oldKey, sortState }),
        key
      };
    }
    case actionTypes.FILTER_CHARACTERS_BY_GENDER: {
      return { ...state, ...filterObjectArray(state, action.gender) };
    }
    default:
      return state;
  }
}
