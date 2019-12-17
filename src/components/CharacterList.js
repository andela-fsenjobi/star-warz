import React from 'react';
import { connect } from "react-redux";
import { sortCharacters } from "../actions/actions";

const mapStateToProps = (state, props) => {
    let totalHeight = 0;
    const characters = state.characters.filter(character => {
        const inMovie = props.list.includes(character.url);
        if (inMovie) totalHeight += +character.height;
        return inMovie;
    });
    const totalHeightInches = totalHeight / 2.54;
    const totalHeightFeet = totalHeightInches / 12;
    const remHeightInches = totalHeightInches % 12;
    
    return { characters, totalHeight, totalHeightFeet, remHeightInches };
}

const CharacterList = ({
  characters,
  totalHeight,
  totalHeightFeet,
  remHeightInches,
  sortCharacters,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <button onClick={() => sortCharacters(characters, "name")}>
              Name
            </button>
          </td>
          <td>
            <button onClick={() => sortCharacters(characters, "gender")}>
              Gender
            </button>
          </td>
          <td>
            <button onClick={() => sortCharacters(characters, "height")}>
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

export default connect(mapStateToProps, { sortCharacters })(CharacterList);
