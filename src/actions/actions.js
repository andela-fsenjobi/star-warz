import { actionTypes } from './actionTypes';

export const getMovies = () => {
  return {
    type: actionTypes.LOAD_MOVIES,
  };
}

export const getDetails = movieId => {
  return {
    type: actionTypes.LOAD_DETAILS,
    movieId,
  };
}

export const sortCharacters = (characters, key) => {
  return {
    type: actionTypes[`SORT_CHARACTERS_BY_${key.toUpperCase()}`],
    characters,
    key
  };
}

export const filterCharacters = gender => {
  return {
    type: actionTypes.FILTER_CHARACTERS_BY_GENDER,
    gender,
  };
}
