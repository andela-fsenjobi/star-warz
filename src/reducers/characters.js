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
    default:
      return state;
  }
}
