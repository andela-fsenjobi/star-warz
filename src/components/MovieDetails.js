import React from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import CharacterList from "./CharacterList";
import MovieIntro from "./MovieIntro";

const mapStateToProps = state => {
  const { movies, movieId } = state;
  return { movie: movies.results.find(result => result.url === movieId) };
};

const MovieDetails = ({ movie }) => {
  return (
    <div>
      {movie ? (
        <div>
          <MovieIntro {...movie} />
          <CharacterList length={movie.characters.length} />
        </div>
      ) : (
        <div className="text-center">
          <img src={logo} className="logo" alt="Star Warz" />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(MovieDetails);
