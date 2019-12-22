import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortCharacters, filterCharacters } from "../actions/actions";
import FilterByGender from "./FilterByGender";
import Loading from "./Loading";

const CharacterList = ({length}) => {
  const movieCharacters = useSelector(state => state.movieCharacters);
  const dispatch = useDispatch();
  const {
    characters,
    totalHeight,
    totalHeightFeet,
    remHeightInches,
    filters,
  } = movieCharacters;
  const dispatchSortCharacters = key => () =>
    dispatch(sortCharacters(characters, key));

  return (length > characters.length) ? (
    <Loading />
  ) : (
    <div className="container">
      <div className="row title">
        <div className="col-md-8 offset-md-2 text-center">
          <h3>List of characters</h3>
        </div>
      </div>
      <div className="row gender-filter">
        <div className="col-md-5 offset-md-1 text-left">Filter by gender:</div>
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
        <div className="col-md-4 offset-md-1">
          <button onClick={dispatchSortCharacters("name")}>Name</button>
        </div>
        <div className="col-md-4">
          <button onClick={dispatchSortCharacters("gender")}>Gender</button>
        </div>
        <div className="col-md-2 text-right">
          <button onClick={dispatchSortCharacters("height")}>Height</button>
        </div>
      </div>
      {console.log(characters)}
      {characters.map(({ name, gender, height, url }) => (
        <div className="row list-item" key={url}>
          <div className="col-md-4 offset-md-1">{name}</div>
          <div className="col-md-4">{gender}</div>
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
