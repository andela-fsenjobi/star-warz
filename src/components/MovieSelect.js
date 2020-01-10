import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import { sortMovies } from "../utility";
import { useMovieState } from "../contexts/MovieContext";

const MovieSelect = React.memo(() => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setMovie } = useMovieState();

  useEffect(() => {
    fetch("https://swapi.co/api/films/")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        setMovies(sortMovies(res.results));
        setLoading(false);
        return res;
      })
      .catch(error => {
        console.log("Not working");
      });
  }, []);

  const handleMovieSelect = event => {
    const movie = movies.find(movie => movie.url === event.target.value);
    setMovie(movie);
  };

  return (
    <div className="title">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="display-4">Choose a Star Wars movie</h1>
        </div>
      </div>
      {loading ? (
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
});

export default MovieSelect;
