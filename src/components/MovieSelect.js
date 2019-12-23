import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCharacters,
  fetchMovies,
  getDetails,
  refreshMovieCharacters
} from "../actions/actions";
import Loading from "./Loading";

const MovieSelect = () => {
  const {
    characters,
    movies: { results: movies, pending }
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleMovieSelect = (dispatch, url) => {
    const movie = movies.find(movie => movie.url === url);
    dispatch(getDetails(movie, characters));
    dispatch(refreshMovieCharacters());
    if (movie) dispatch(fetchCharacters(movie.characters, characters));
  };
  if (movies.length < 1) dispatch(fetchMovies());
  return (
    <div className="title">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="display-4">Choose a Star Wars movie</h1>
        </div>
      </div>
      {pending ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <select
              onChange={e => handleMovieSelect(dispatch, e.target.value)}
              className="form-control form-control-lg"
            >
              <option></option>
              {movies.map(movie => (
                <option key={movie.url} value={movie.url}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSelect;
