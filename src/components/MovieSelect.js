import React from 'react';
import { connect } from "react-redux";
import { getDetails } from '../actions/actions'

const handleMovieSelect = (event) => {
    console.log(event.target.value);
};

const MovieSelect = () => (
    <div>
        <p>
            Choose a star wars movie
        </p>
        <select onChange={handleMovieSelect}>
            <option></option>
            <option value="1">Movie 1</option>
            <option value="2">Movie 2</option>
            <option value="3">Movie 3</option>
            <option value="4">Movie 4</option>
        </select>
    </div>
);

export default connect(null, { getDetails })(MovieSelect);
