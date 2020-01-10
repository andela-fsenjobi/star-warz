import React, { useEffect } from "react";

import {
  sortCharacters,
  filterCharacters,
  loadCharacter,
  refreshCharacters
} from "../actions/actions";
import FilterByGender from "./FilterByGender";
import SortIndicator from "./SortIndicator";
import Loading from "./Loading";
import { useCharactersState, useCharactersDispatch } from '../contexts/CharactersContext';
import { useCache } from "../contexts/CacheContext";

const CharacterList = ({movie}) => {
  const movieCharacters = useCharactersState();
  const dispatch = useCharactersDispatch();
  const { addToCache, cache } = useCache();
  const {
    characters,
    totalHeight,
    totalHeightFeet,
    remHeightInches,
    filters,
    filtered,
    sortState,
    key,
  } = movieCharacters;
  const dispatchSortCharacters = key => () =>
    dispatch(sortCharacters(characters, key));
  let serialNo = 0;
    const fetchCharacter = id => {
      return fetch(`https://swapi.co/api/people/${id}/`)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw res.error;
          }
          dispatch(loadCharacter(id, res));
          addToCache(id, res);
          return res;
        })
        .catch(error => {
          console.log("Not working");
        });
    };

    useEffect(
      () => {
        dispatch(refreshCharacters());
        for (let i in movie.characters) {
          const url = movie.characters[i];
          const characterId = +url.match(/\d+/)[0];
          if(cache[characterId]) {
            dispatch(loadCharacter(characterId, cache[characterId]));
          } else {
            fetchCharacter(characterId);
          }
        }
      },
      [movie]
    );

  return (!filtered && movie.characters.length > characters.length) ?
    <Loading/> :
  (
    <div className="container">
      <div className="row title">
        <div className="col-md-8 offset-md-2 text-center">
          <h3>List of characters</h3>
        </div>
      </div>
      <div className="row gender-filter">
        <div className="col-md-5 offset-md-1 text-right">Filter by gender:</div>
        <div className="col-md-5 text-right">
          <FilterByGender
            filters={filters}
            onChange={e =>
              dispatch(filterCharacters(characters, e.target.value))
            }
          />
        </div>
      </div>
      <div className="row list-header">
        <div className="col-md-1 offset-md-1" />
        <div className="col-md-4 offset-md-1">
          <button onClick={dispatchSortCharacters("name")}>Name</button>
          <SortIndicator sortState={sortState} filter={key} label={"name"} />
        </div>
        <div className="col-md-2">
          <button onClick={dispatchSortCharacters("gender")}>Gender</button>
          <SortIndicator sortState={sortState} filter={key} label={"gender"} />
        </div>
        <div className="col-md-2 text-right">
          <button onClick={dispatchSortCharacters("height")}>Height</button>
          <SortIndicator sortState={sortState} filter={key} label={"height"} />
        </div>
      </div>
      {characters.map(({ name, gender, height, url }) => (
        <div className="row list-item" key={url}>
          <div className="col-md-1 offset-md-1">{++serialNo}</div>
          <div className="col-md-4 offset-md-1">{name}</div>
          <div className="col-md-2">{gender}</div>
          <div className="col-md-2 text-right">{height}</div>
        </div>
      ))}
      <div className="row list-footer">
        <div className="col-md-10 offset-md-1 text-right border-top">
          {`${totalHeight}cm`} ({`${totalHeightFeet}ft/${remHeightInches}in`})
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
