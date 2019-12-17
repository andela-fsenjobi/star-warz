import React from 'react';
import { connect } from "react-redux";
import { getDetails } from '../actions/actions'

const mapStateToProps = state => {
    return { movies: state.movies };
}

const MovieSelect = ({ movies, getDetails }) => {
    const handleMovieSelect = event => {
        getDetails(event.target.value);
    };
    return(
        <div>
            <p>
                Choose a star wars movie
            </p>
            <select onChange={handleMovieSelect}>
                <option></option>
                {movies.map(movie => <option key={movie.url} value={movie.url}>{movie.title}</option>)}
            </select>
        </div>
    )
}



export default connect(mapStateToProps, { getDetails })(MovieSelect);
