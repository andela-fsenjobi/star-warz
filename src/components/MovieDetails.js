import React from "react";

import logo from "../logo.svg";
import CharacterList from "./CharacterList";
import MovieIntro from "./MovieIntro";
import { useMovieState } from '../contexts/MovieContext';
import { CharactersProvider } from '../contexts/CharactersContext';
import { CacheProvider } from "../contexts/CacheContext";

function MovieDetails() {
  const { movie } = useMovieState();

  return (
    <div>
      {movie ? (
        <div>
          <MovieIntro {...movie} />
          <CharactersProvider>
            <CacheProvider>
              <CharacterList movie={movie} />
            </CacheProvider>
          </CharactersProvider>
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
