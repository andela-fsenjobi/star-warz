import { filter, decorate } from "./filter";

export const decorateMovieCharacters = (movieCharacters, state) => {
  const startPoint = state.refresh
    ? { characters: [], totalHeight: 0, filters: [] }
    : state;

  const updatedMovieCharacters = filter(
    movieCharacters,
    startPoint,
    "gender",
    "all"
  );

  const heightDetails = decorate(updatedMovieCharacters.totalHeight);

  return {
    ...updatedMovieCharacters,
    ...heightDetails,
    refresh: false
  };
};
