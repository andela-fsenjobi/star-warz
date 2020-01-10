import React from 'react';

import MovieSelect from './components/MovieSelect';
import MovieDetails from './components/MovieDetails';
import './App.css';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <header className="App-header">
          <MovieSelect />
          <MovieDetails />
        </header>
      </div>
    </MovieProvider>
  );
}

export default App;
