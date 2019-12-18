import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortCharacters, filterCharacters } from "../actions/actions";
import FilterByGender from "./FilterByGender";

const CharacterList = () => {
  const movieCharacters = useSelector(state => state.movieCharacters);
  const dispatch = useDispatch();
  const {
    characters,
    totalHeight,
    totalHeightFeet,
    remHeightInches,
    filters
  } = movieCharacters;

  return (
    <table>
      <thead>
        <tr>
          <td>
            <button
              onClick={() => dispatch(sortCharacters(characters, "name"))}
            >
              Name
            </button>
          </td>
          <td>
            <button
              onClick={() => dispatch(sortCharacters(characters, "gender"))}
            >
              Gender
            </button>
            <FilterByGender
              filters={filters}
              onChange={e =>
                dispatch(filterCharacters(characters, e.target.value))
              }
            />
          </td>
          <td>
            <button
              onClick={() => dispatch(sortCharacters(characters, "height"))}
            >
              Height
            </button>
          </td>
        </tr>
      </thead>
      <tbody>
        {characters.map(({ name, gender, height, url }) => (
          <tr key={url}>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{height}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>
            {`${totalHeight}cm`} (
            {`${totalHeightFeet}ft/${remHeightInches}in`})
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CharacterList;
