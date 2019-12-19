export const decorateMovieCharacters = movieCharacters => {
  const filters = [];
  const totalHeight = movieCharacters.reduce((a, b) => {
    if (!filters.includes(b.gender)) filters.push(b.gender);
    return (b.height !== "unknown") ? (a += +b.height) : a;
  }, 0);

  const totalHeightInches = totalHeight / 2.54;
  const totalHeightFeet = Math.round(totalHeightInches / 12);
  const remHeightInches = Math.round(totalHeightInches % 12);

  return {
    characters: movieCharacters,
    totalHeight,
    totalHeightFeet,
    remHeightInches,
    filters
  };
};
