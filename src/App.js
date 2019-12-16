import React from 'react';
import MovieSelect from './components/MovieSelect';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App(movie) {
  return (
    <div className="App">
      <header className="App-header">
        <MovieSelect />
        <MovieDetails />
      </header>
    </div>
  );
}

export default App;
