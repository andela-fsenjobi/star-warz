import * as React from "react";

const CacheContext = React.createContext();

function CacheProvider({ children }) {
  const [cache, setAllCharacters] = React.useState([]);
  const addToCache = (id, character) => {
    const newCache = cache;
    newCache[id] = character;
    setAllCharacters(newCache);
  }
  const state = { cache, addToCache };
  return (
    <CacheContext.Provider value={state}>{children}</CacheContext.Provider>
  );
}

function useCache() {
  return React.useContext(CacheContext);
}

export { CacheProvider, useCache };

