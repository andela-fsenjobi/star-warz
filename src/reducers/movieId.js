import { actionTypes } from "../actions/actionTypes";

export default function(state = null, action) {  
  switch (action.type) {
    case actionTypes.LOAD_DETAILS:
      return action.movieId;
    default:
      return state;
  }
}
