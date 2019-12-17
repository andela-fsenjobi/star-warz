import React from "react";
import { connect } from "react-redux";
import { getDetails, getCharacters } from "../actions/actions";

const mapStateToProps = state => ({ movies: state.movies, characters: state.characters });

const MovieSelect = ({ movies, getDetails, characters }) => {
  const handleMovieSelect = event => {
    const movieURL = event.target.value;
    const movie = movies.find(movie => movie.url === movieURL);
    getDetails(movie, characters);    
    // getCharacters(characters, movie.characters);
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

export default connect(mapStateToProps, { getDetails, getCharacters })(
  MovieSelect
);
