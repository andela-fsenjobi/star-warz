import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortCharacters, filterCharacters } from "../actions/actions";
import FilterByGender from "./FilterByGender";
import SortIndicator from "./SortIndicator";
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
    filtered,
    sortState,
    key,
  } = movieCharacters;
  const dispatchSortCharacters = key => () =>
    dispatch(sortCharacters(characters, key));
  let serialNo = 0;

  return (!filtered && length > characters.length) ?
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
