export const sortObjectArray = ({
  characters: objectArray,
  key,
  oldKey,
  sortState
}) => {
  return oldKey === key && sortState === "asc"
    ? sortDesc(objectArray, key)
    : sortAsc(objectArray, key);
};

const sortDesc = (objectArray, key) => {
  const newObjectArray = objectArray.sort((a, b) => {
    const currentItem = prepareValue(a[key], key);
    const nextItem = prepareValue(b[key], key);
    if (currentItem > nextItem) {
      return -1;
    } else if (currentItem < nextItem) {
      return 1;
    } else {
      return 0;
    }
  });

  return { characters: newObjectArray, sortState: "desc", oldKey: key };
};

const sortAsc = (objectArray, key) => {
  const newObjectArray = objectArray.sort((a, b) => {
    const currentItem = prepareValue(a[key], key);
    const nextItem = prepareValue(b[key], key);
    if (currentItem > nextItem) {
      return 1;
    } else if (currentItem < nextItem) {
      return -1;
    } else {
      return 0;
    }
  });

  return { characters: newObjectArray, sortState: "asc", oldKey: key };
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
