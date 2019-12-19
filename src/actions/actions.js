import { actionTypes } from "./actionTypes";

export const getMovies = () => ({ type: actionTypes.LOAD_MOVIES });

export const getDetails = (movie, characters) => ({
  type: actionTypes.LOAD_DETAILS,
  movie,
  characters
});

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

export const addCachedMovieCharacters = movieCharacters => ({
  type: actionTypes.ADD_CACHED_CHARACTERS,
  movieCharacters
});

const fetchCharacter = (id, dispatch) => {
  return fetch(`https://swapi.co/api/people/${id}/`)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(loadCharacter(id, res));
      return res;
    })
    .catch(error => {
      console.log("Not working");
    });
};

export const fetchCharacters = (list, characters) => {
  return dispatch => {
    const movieCharacters = [];
    for (let i in list) {
      const url = list[i];
      const characterId = +url.match(/\d+/)[0];
      if (characters[characterId] !== undefined) {
        movieCharacters.push(characters[characterId]);
      } else {
        fetchCharacter(characterId, dispatch);
      }
    }
    dispatch(addCachedMovieCharacters(movieCharacters));
  };
};
