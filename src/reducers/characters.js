import { actionTypes } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  const { id, character, type } = action
  switch (type) {
    case actionTypes.LOAD_CHARACTER: {
      const newState = state;
      newState[id] = character;
      return newState;
    }
    case actionTypes.LOAD_DETAILS:
      return state;
    case actionTypes.SORT_CHARACTERS_BY_GENDER:
      return state;
    case actionTypes.SORT_CHARACTERS_BY_HEIGHT:
      return state;
    case actionTypes.SORT_CHARACTERS_BY_NAME:
      return state;
    case actionTypes.FILTER_CHARACTERS_BY_GENDER:
      return state;
    default:
      return state;
  }
}
