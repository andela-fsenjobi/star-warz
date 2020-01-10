import * as React from "react";

const CharactersCacheContext = React.createContext();

function CacheProvider({ children }) {
  const [allCharacters, setAllCharacters] = React.useState([]);
  const addToCache = (characters, id, character) => {
    const cache = characters;
    cache[id] = character;
    return cache;
  }
  // setAllCharacters(addToCache(allCharacters, id, character));
  const state = { allCharacters, setAllCharacters, addToCache };
  return (
    <CharactersCacheContext.Provider value={state}>{children}</CharactersCacheContext.Provider>
  );
}

function useCharacterCache() {
  return React.useContext(CharactersCacheContext);
}

export { CacheProvider, useCharacterCache };

