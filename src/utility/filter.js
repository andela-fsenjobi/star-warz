export const filterObjectArray = (objectArray, gender) => {
  const {
    characters,
    filtered,
    gender: oldGender,
    filteredCharacters
  } = objectArray;
  let listToFilter;
  if (filtered) {
    if (gender === oldGender) return objectArray;
    if (gender === "all") {
      listToFilter = filteredCharacters.concat(characters);
    } else if (gender !== oldGender) {
      listToFilter = filteredCharacters;
    }
  } else {
    listToFilter = characters;
  }

  const newStuff = listToFilter.reduce(
    (a, b) => {
      if (b.gender === gender || gender === "all") {
        a.characters.push(b);
        a.totalHeight += +b.height;
      } else {
        a.filteredCharacters.push(b);
      }

      return a;
    },
    {
      characters: [],
      totalHeight: 0,
      filteredCharacters: []
    }
  );

  const totalHeightInches = newStuff.totalHeight / 2.54;
  const totalHeightFeet = totalHeightInches / 12;
  const remHeightInches = totalHeightInches % 12;
  return {
    ...newStuff,
    filteredCharacters: (filtered && gender !== oldGender) ? newStuff.filteredCharacters.concat(characters) : newStuff.filteredCharacters,
    totalHeightFeet,
    remHeightInches,
    filtered: gender !== 'all',
    gender
  };
};
