import { actionTypes } from "../actions/actionTypes";

export default function(state = null, action) {  
  switch (action.type) {
    case actionTypes.LOAD_DETAILS:
      return action.movie ? action.movie.url : null;
    default:
      return state;
  }
}
