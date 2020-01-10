import { filter, decorate } from "./filter";

export const updateCharacters = (movieCharacters, state) => {
  const startPoint = state.refresh
    ? { characters: [], totalHeight: 0, filters: [] }
    : state;

  const updatedCharacters = filter(
    movieCharacters,
    startPoint,
    "gender",
    "all"
  );

  const heightDetails = decorate(updatedCharacters.totalHeight);

  return {
    ...updatedCharacters,
    ...heightDetails,
    refresh: false,
  };
};
