import React from 'react';
import './App.css';
import { PokemonPager } from './Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React.query-suspense</p>
      </header>
      <body className='App-body'>
        <PokemonPager />
      </body>
    </div>
  );
}

export default App;
