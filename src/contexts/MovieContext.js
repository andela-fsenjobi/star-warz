import * as React from 'react';

const MovieContext = React.createContext();

function MovieProvider({children}) {
  const [movie, setMovie] = React.useState();
  const state = { movie, setMovie };
  return (
    <MovieContext.Provider value={state}>
        {children}
    </MovieContext.Provider>
  );
}

function useMovieState() {
  return React.useContext(MovieContext);
}

export { MovieProvider, useMovieState };
