export const filterCharacters = (objectArray, gender) => {
  const {
    characters,
    filtered,
    gender: oldGender,
    filteredCharacters,
    totalHeight
  } = objectArray;
  let listToFilter;
  let startPoint = {
    characters: [],
    totalHeight: 0,
    filteredCharacters: [],
    filters: []
  };
  if (gender === oldGender) return objectArray;
  if (filtered) {
    listToFilter = filteredCharacters;
    if (gender === "all") {
      startPoint.characters = characters;
      startPoint.totalHeight = totalHeight;
    } else if (gender !== oldGender) {
      startPoint.filteredCharacters = characters;
    }
  } else {
    listToFilter = characters;
  }

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

export const filter = (object, start, key, filter) =>
  object.reduce((a, b) => {
    if (b[key] === filter || filter === "all") {
      a.characters.push(b);
      if (!a.filters.includes(b.gender)) a.filters.push(b.gender);
      if (b.height !== "unknown") a.totalHeight += +b.height;
    } else {
      a.filteredCharacters.push(b);
    }
    return a;
  }, start);

export const decorate = totalHeight => {
  const totalHeightInches = totalHeight / 2.54;
  const totalHeightFeet = Math.round(totalHeightInches / 12);
  const remHeightInches = Math.round(totalHeightInches % 12);
  return { totalHeightFeet, remHeightInches };
};
