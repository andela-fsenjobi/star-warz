import { actionTypes } from "./actionTypes";

export const getMovies = () => ({ type: actionTypes.LOAD_MOVIES });

export const getCharacters = (characters, list) => ({
  type: actionTypes.LOAD_MOVIE_CHARACTERS,
  characters,
  list
});

export const sortCharacters = (characters, key) => ({
  type: actionTypes.SORT_CHARACTERS,
  characters,
  key
});

export const filterCharacters = (characters, gender) => ({
  type: actionTypes.FILTER_CHARACTERS_BY_GENDER,
  characters,
  gender
});

export const loadCharacter = (id, character) => ({
  type: actionTypes.LOAD_CHARACTER,
  id,
  character
});

export const refreshMovieCharacters = () => ({
  type: actionTypes.REFRESH_MOVIE_CHARACTERS
});
export const movieCharactersLoading = () => ({
  type: actionTypes.MOVIE_CHARACTERS_LOADING
});

export const movieCharactersLoaded = () => ({
  type: actionTypes.MOVIE_CHARACTERS_LOADED
});

export const addCachedMovieCharacters = movieCharacters => ({
  type: actionTypes.ADD_CACHED_CHARACTERS,
  movieCharacters
});
