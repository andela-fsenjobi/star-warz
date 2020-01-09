export const filterCharacters = (objectArray, gender) => {
  if (gender === objectArray.gender) return objectArray;

  const listToFilter = objectArray.filtered ? objectArray.filteredCharacters : objectArray.characters;
  const startPoint = getStartPoint(objectArray, gender);
  const movieCharacters = filter(listToFilter, startPoint, "gender", gender);
  const heightDetails = decorate(movieCharacters.totalHeight);

  return {
    ...movieCharacters,
    ...heightDetails,
    filtered: gender !== "all",
    filters: objectArray.filters,
    gender
  };
};

const getStartPoint = ({
    characters,
    filtered,
    totalHeight
  }, gender) => {

  const startPoint = {
    characters: [],
    totalHeight: 0,
    filteredCharacters: [],
    filters: []
  };

  if (filtered) {
    // if list was previously filtered, don't start all over
    // add all hidden characters to the list if filter changes to all
    // if filter changes, all current visible characters are automatically filtered
    return {
      ...startPoint,
      characters: gender === "all" ? characters : [],
      totalHeight: gender === "all" ? totalHeight : 0,
      filteredCharacters: gender === "all" ? [] : characters,
    };
  }

  return startPoint;
}

export const filter = (object, start, key, filter) =>
  object.reduce((a, b) => {
    if (b[key] === filter || filter === "all") {
      return {
        ...a,
        characters: [...a.characters, b],
        filters: a.filters.includes(b.gender)
          ? a.filters
          : [...a.filters, b.gender],
        height: b.height === "unknown" ? a.totalHeight : a.totalHeight += +b.height, 
      };
    }
    return {
      ...a,
      filteredCharacters: [...a.filteredCharacters, b]
    };
  }, start);

export const decorate = totalHeight => {
  const totalHeightInches = totalHeight / 2.54;
  const totalHeightFeet = Math.round(totalHeightInches / 12);
  const remHeightInches = Math.round(totalHeightInches % 12);
  return { totalHeightFeet, remHeightInches };
};
