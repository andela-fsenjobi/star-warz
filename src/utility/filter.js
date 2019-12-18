export const filterObjectArray = (objectArray, gender) => {
  const {
    characters,
    filtered,
    gender: oldGender,
    filteredCharacters,
    totalHeight,
  } = objectArray;
  let listToFilter;
  let startPoint = {
    characters: [],
    totalHeight: 0,
    filteredCharacters: [],
  };
  if (filtered) {
    if (gender === oldGender) return objectArray;
    if (gender === "all") {
      listToFilter = filteredCharacters;
      startPoint = {
        characters,
        totalHeight,
        filteredCharacters: [],
      };
    } else if (gender !== oldGender) {
      listToFilter = filteredCharacters;
    }
  } else {
    listToFilter = characters;
  }

  const newStuff = listToFilter.reduce((a, b) => {
    if (b.gender === gender || gender === "all") {
      a.characters.push(b);
      a.totalHeight += +b.height;
    } else {
      a.filteredCharacters.push(b);
    }
    return a;
  }, startPoint);
  
  const totalHeightInches = newStuff.totalHeight / 2.54;
  const totalHeightFeet = Math.round(totalHeightInches / 12);
  const remHeightInches = Math.round(totalHeightInches % 12);
  return {
    ...newStuff,
    filteredCharacters: (filtered && gender !== oldGender) ? newStuff.filteredCharacters.concat(characters) : newStuff.filteredCharacters,
    totalHeightFeet,
    remHeightInches,
    filtered: gender !== 'all',
    gender
  };
};
