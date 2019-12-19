import React from "react";
import { connect } from "react-redux";
import {
  fetchCharacters,
  fetchMovies,
  getDetails,
  refreshMovieCharacters,
} from "../actions/actions";

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
    <div>
      <p>Choose a star wars movie</p>
      {console.log({pending})}
      {!pending && (
        <select onChange={handleMovieSelect}>
          <option></option>
          {movies.map(movie => (
            <option key={movie.url} value={movie.url}>
              {movie.title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default connect(mapStateToProps, {
  fetchCharacters,
  fetchMovies,
  getDetails,
  refreshMovieCharacters,
})(MovieSelect);
