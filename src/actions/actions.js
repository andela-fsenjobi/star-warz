import { actionTypes } from './actionTypes';

export const getMovies = () => ({ type: actionTypes.LOAD_MOVIES });

export const getDetails = (movie, characters) => ({
  type: actionTypes.LOAD_DETAILS,
  movie,
  characters,
});

export const getCharacters = (characters, list) => ({
  type: actionTypes.LOAD_MOVIE_CHARACTERS,
  characters,
  list,
});

export const sortCharacters = (characters, key) => ({
  type: actionTypes.SORT_CHARACTERS,
  characters,
  key,
});

export const filterCharacters = (characters, gender) => ({
  type: actionTypes.FILTER_CHARACTERS_BY_GENDER,
  characters,
  gender,
});
