import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Choose a star wars movie
        </p>
        <select>
          <option></option>
          <option>Movie 1</option>
          <option>Movie 2</option>
          <option>Movie 3</option>
          <option>Movie 4</option>
        </select>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the introtext of the starwars movie... This is the introtext of the starwars movie... This is the introtext of the starwars movie... This is the introtext of the starwars movie... This is the introtext of the starwars movie... This is the introtext of the starwars movie...</p>
        <table>
          <thead>
            <tr>
              <td><button>Name</button></td>
              <td><button>Gender</button></td>
              <td><button>Height</button></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Obi Wan Ken-Obi</td>
              <td>Male</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Obi Wan Ken-Obi</td>
              <td>Male</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Obi Wan Ken-Obi</td>
              <td>Male</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Obi Wan Ken-Obi</td>
              <td>Male</td>
              <td>50</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>170cm (50ft/11iches)</td>
            </tr>
          </tfoot>

        </table>
      </header>
    </div>
  );
}

export default App;
