import { actionTypes } from './actionTypes';

export const getMovies = () => ({ type: actionTypes.LOAD_MOVIES });

export const getDetails = (movieId, characters) => ({
  type: actionTypes.LOAD_DETAILS,
  movieId,
  characters,
});

export const sortCharacters = (characters, key) => ({
  type: actionTypes[`SORT_CHARACTERS_BY_${key.toUpperCase()}`],
  characters,
  key
});


export const filterCharacters = gender => ({
  type: actionTypes.FILTER_CHARACTERS_BY_GENDER,
  gender,
});
