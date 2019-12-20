export const sortCharacters = ({
  characters: objectArray,
  key,
  oldKey,
  sortState
}) => {
  const isDesc = oldKey === key && sortState === "asc";
  const order = isDesc ? "desc" : "asc";
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
      return sortMap[order].less;;
    } else {
      return 0;
    }
  });
};

export const sortMovies = movies => sort(movies, "release_date");

const sortMap = {
  desc: { greater: -1, less: 1 },
  asc: { greater: 1, less: -1 }
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
