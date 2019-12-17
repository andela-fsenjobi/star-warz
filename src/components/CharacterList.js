import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortCharacters } from "../actions/actions";

const CharacterList = () => {
  const movieCharacters = useSelector(state => state.movieCharacters);
  const dispatch = useDispatch();
  const {
    characters,
    totalHeight,
    totalHeightFeet,
    remHeightInches
  } = movieCharacters;
  
  return (
    <table>
      <thead>
        <tr>
          <td>
            <button onClick={() => dispatch(sortCharacters(characters, "name"))}>
              Name
            </button>
          </td>
          <td>
            <button onClick={() => dispatch(sortCharacters(characters, "gender"))}>
              Gender
            </button>
          </td>
          <td>
            <button onClick={() => dispatch(sortCharacters(characters, "height"))}>
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
            {`${totalHeightFeet}ft/${remHeightInches}inches`})
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CharacterList;