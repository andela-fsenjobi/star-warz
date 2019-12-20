import React from "react";
import { useSelector } from "react-redux";

import logo from "../logo.svg";
import CharacterList from "./CharacterList";
import MovieIntro from "./MovieIntro";

const MovieDetails = () => {
  const { movies, movieId } = useSelector(state => state);
  const movie = movies.results.find(result => result.url === movieId);

  return (
    <div>
      {movie ? (
        <div>
          <MovieIntro {...movie} />
          <CharacterList />
        </div>
      ) : (
        <div className="text-center">
          <img src={logo} className="logo" alt="Star Warz" />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
