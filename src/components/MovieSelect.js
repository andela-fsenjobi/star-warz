import React from "react";
import { connect } from "react-redux";
import {
  fetchCharacters,
  fetchMovies,
  getDetails,
  refreshMovieCharacters
} from "../actions/actions";
import Loading from "./Loading";

const mapStateToProps = state => ({
  movies: state.movies.results,
  pending: state.movies.pending,
  characters: state.characters
});

const MovieSelect = ({
  characters,
  fetchCharacters,
  fetchMovies,
  getDetails,
  movies,
  pending,
  refreshMovieCharacters
}) => {
  fetchMovies();
  const handleMovieSelect = event => {
    const movieURL = event.target.value;
    const movie = movies.find(movie => movie.url === movieURL);
    getDetails(movie, characters);
    refreshMovieCharacters();
    fetchCharacters(movie.characters, characters);
  };
  return (
    <div className="title">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 class="display-4">Choose a Star Wars movie</h1>
        </div>
      </div>
      {pending ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <select
              onChange={handleMovieSelect}
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

export default connect(mapStateToProps, {
  fetchCharacters,
  fetchMovies,
  getDetails,
  refreshMovieCharacters
})(MovieSelect);
