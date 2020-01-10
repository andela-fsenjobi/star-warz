import * as React from "react";
import { actionTypes } from "../actions/actionTypes";
import {
  sortCharacters,
  filterCharacters,
  updateMovieCharacters
} from "../utility";

const MovieCharactersStateContext = React.createContext();
const MovieCharactersDispatchContext = React.createContext();

const initialState = { characters: [], filters: [], totalHeight: 0 };

function movieCharactersReducer(state, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTER: {
      return updateMovieCharacters([action.character], state);
    }
    case actionTypes.ADD_CACHED_CHARACTERS: {
      return updateMovieCharacters(action.movieCharacters, state);
    }
    case actionTypes.REFRESH_MOVIE_CHARACTERS:
      return { ...initialState, refresh: true };
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


function MovieCharactersProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    movieCharactersReducer,
    initialState
  );

  return (
    <MovieCharactersStateContext.Provider value={state}>
      <MovieCharactersDispatchContext.Provider value={dispatch}>
        {children}
      </MovieCharactersDispatchContext.Provider>
    </MovieCharactersStateContext.Provider>
  );
}

function useMovieCharactersState() {
  return React.useContext(MovieCharactersStateContext);
}

function useMovieCharactersDispatch() {
  return React.useContext(MovieCharactersDispatchContext);
}

export { MovieCharactersProvider, useMovieCharactersState, useMovieCharactersDispatch };
