import * as React from "react";
import { actionTypes } from "../actions/actionTypes";
import {
  sortCharacters,
  filterCharacters,
  updateCharacters
} from "../utility";

const CharactersStateContext = React.createContext();
const CharactersDispatchContext = React.createContext();

const initialState = { characters: [], filters: [], totalHeight: 0 };

function charactersReducer(state, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTER: {
      return updateCharacters([action.character], state);
    }
    case actionTypes.ADD_CACHED_CHARACTERS: {
      return updateCharacters(action.movieCharacters, state);
    }
    case actionTypes.REFRESH_CHARACTERS:
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
    case actionTypes.FILTER_CHARACTERS: {
      return { ...state, ...filterCharacters(state, action.gender) };
    }
    default:
      return state;
  }
}


function CharactersProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    charactersReducer,
    initialState
  );

  return (
    <CharactersStateContext.Provider value={state}>
      <CharactersDispatchContext.Provider value={dispatch}>
        {children}
      </CharactersDispatchContext.Provider>
    </CharactersStateContext.Provider>
  );
}

function useCharactersState() {
  return React.useContext(CharactersStateContext);
}

function useCharactersDispatch() {
  return React.useContext(CharactersDispatchContext);
}

export { CharactersProvider, useCharactersState, useCharactersDispatch };
