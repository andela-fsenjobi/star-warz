import React from 'react';
import logo from '../logo.svg';
import CharacterList from './CharacterList';
import MovieIntro from './MovieIntro';

function MovieDetails() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <MovieIntro />
            <CharacterList />
        </div>
    );
}

export default MovieDetails;
