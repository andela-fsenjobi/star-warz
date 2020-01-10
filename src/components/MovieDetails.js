import React from "react";

import logo from "../logo.svg";
import CharacterList from "./CharacterList";
import MovieIntro from "./MovieIntro";
import { useMovieState } from '../contexts/MovieContext';
import { MovieCharactersProvider } from '../contexts/MovieCharactersContext';


function MovieDetails() {
  const { movie } = useMovieState();

  return (
    <div>
      {movie ? (
        <div>
          <MovieIntro {...movie} />
          <MovieCharactersProvider>
            <CharacterList movie={movie} />
          </MovieCharactersProvider>
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
