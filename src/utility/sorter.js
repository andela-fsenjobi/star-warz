export const sortObjectArray = ({
  characters: objectArray,
  key,
  oldKey,
  sortState
}) => {
  const shouldSortDesc = oldKey === key && sortState === "asc";
  if (key === "height") {
    return shouldSortDesc ? sortNumDesc(objectArray, key) : sortNumAsc(objectArray, key);
  }
  return shouldSortDesc ? sortDesc(objectArray, key) : sortAsc(objectArray, key);
};

const sortDesc = (objectArray, key) => {
  const newObjectArray = objectArray.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    } else if (a[key] < b[key]) {
      return 1;
    } else {
      return 0;
    }
  });

  return { characters: newObjectArray, sortState: "desc", oldKey: key };
};

const sortAsc = (objectArray, key) => {
  const newObjectArray = objectArray.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
      return 0;
    }
  });

  return { characters: newObjectArray, sortState: "asc", oldKey: key };
};

const sortNumDesc = (objectArray, key) => {
  const newObjectArray = objectArray.sort((a, b) => {
    if (+a[key] > +b[key]) {
      return -1;
    } else if (+a[key] < +b[key]) {
      return 1;
    } else {
      return 0;
    }
  });

  return { characters: newObjectArray, sortState: "desc", oldKey: key };
};

const sortNumAsc = (objectArray, key) => {
  const newObjectArray = objectArray.sort((a, b) => {
    if (+a[key] > +b[key]) {
      return 1;
    } else if (+a[key] < +b[key]) {
      return -1;
    } else {
      return 0;
    }
  });

  return { characters: newObjectArray, sortState: "asc", oldKey: key };
};
