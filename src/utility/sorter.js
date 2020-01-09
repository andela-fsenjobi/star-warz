export const sortCharacters = ({
  characters: objectArray,
  key,
  oldKey,
  sortState
}) => {
  const order = oldKey === key && sortState === "asc" ? "desc" : "asc";
  const characters = sort(objectArray, key, order)

  return { characters, sortState: order, oldKey: key };
};

const sort = (objectArray, key, order) => {
  return objectArray.sort((a, b) => {
    const currentItem = prepareValue(a[key], key);
    const nextItem = prepareValue(b[key], key);
    if (currentItem > nextItem) {
      return sortMap[order].greater;
    } else if (currentItem < nextItem) {
      return sortMap[order].lesser;;
    } else {
      return 0;
    }
  });
};

export const sortMovies = movies => sort(movies, 'release_date', 'asc');

const sortMap = {
  // This helps to make the sort function dynamic and reusable for both 'asc' and 'desc' sorting
  desc: { greater: -1, lesser: 1 },
  asc: { greater: 1, lesser: -1 }
};

const prepareValue = (value, type) => {
  if (type === "height" && value !== "unknown") {
    return +value;
  } else if (type === "height" && value === "unknown") {
    return 0;
  } else if (type === "release_date") {
    return new Date(value);
  } else {
    return value;
  }
};
