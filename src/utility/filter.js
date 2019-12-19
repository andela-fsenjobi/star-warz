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
  if (gender === oldGender) return objectArray;
  if (filtered) {
    listToFilter = filteredCharacters;
    if (gender === "all") {
      startPoint.characters = characters;
      startPoint.totalHeight = totalHeight;
    } else if (gender !== oldGender) {
      startPoint.filteredCharacters =  characters
    }
  } else {
    listToFilter = characters;
  }

  const newStuff = listToFilter.reduce((a, b) => {
    if (b.gender === gender || gender === "all") {
      a.characters.push(b);
      if (b.height !== "unknown") a.totalHeight += +b.height;
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
    totalHeightFeet,
    remHeightInches,
    filtered: gender !== 'all',
    gender
  };
};
