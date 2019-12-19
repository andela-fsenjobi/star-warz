export const decorateMovieCharacters = (movieCharacters, state) => {
  const startPoint = state.refresh ? {characters: [], totalHeight: 0, filters: []} : state;
  const newMovieCharacters = movieCharacters.reduce((a, b) => {
    a.characters.push(b);
    if (!a.filters.includes(b.gender)) a.filters.push(b.gender);
    if (b.height !== "unknown") a.totalHeight += +b.height;

    return a;
  }, startPoint);

  const totalHeightInches = newMovieCharacters.totalHeight / 2.54;
  const totalHeightFeet = Math.round(totalHeightInches / 12);
  const remHeightInches = Math.round(totalHeightInches % 12);

  return {
    ...newMovieCharacters,
    totalHeightFeet,
    remHeightInches,
    refresh: false,
  };
};
