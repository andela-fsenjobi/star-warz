import React from 'react';
import { connect } from "react-redux";

import logo from '../logo.svg';
import CharacterList from './CharacterList';
import MovieIntro from './MovieIntro';

const mapStateToProps = (state) => {
    const {movies, movieId} = state;
    console.log(movies, movieId);
    return { movie: movies.find(result => result.url === movieId) };
}

const MovieDetails = ({ movie }) => {
    return (
        <div>
            {
                movie ?
                <div>
                    <MovieIntro text={movie.opening_crawl} />
                    <CharacterList characters={movie.characters} />
                </div> :
                <img src={logo} className="App-logo" alt="logo" />
            }

        </div>
    );
}

export default connect(mapStateToProps)(MovieDetails);