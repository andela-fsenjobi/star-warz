import React from 'react';

import MovieSelect from './components/MovieSelect';
import MovieDetails from './components/MovieDetails';
import './App.css';
import { MovieProvider } from './contexts/MovieContext';
import { CacheProvider } from './contexts/CharactersCacheContext';

function App() {
  return (
    <MovieProvider>
      <CacheProvider>
        <div className="App">
          <header className="App-header">
            <MovieSelect />
            <MovieDetails />
          </header>
        </div>
      </CacheProvider>
    </MovieProvider>
  );
}

export default App;
