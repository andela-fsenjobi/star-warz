import React from "react";
import { connect } from "react-redux";
import {
  getDetails,
  fetchCharacters,
  refreshMovieCharacters
} from "../actions/actions";

const mapStateToProps = state => ({ movies: state.movies, characters: state.characters });

const MovieSelect = ({
  movies,
  characters,
  getDetails,
  fetchCharacters,
  refreshMovieCharacters
}) => {
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
      <select onChange={handleMovieSelect}>
        <option></option>
        {movies.map(movie => (
          <option key={movie.url} value={movie.url}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default connect(mapStateToProps, {
  getDetails,
  fetchCharacters,
  refreshMovieCharacters
})(MovieSelect);
