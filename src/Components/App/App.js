import React, { useState, useCallback } from 'react';
import './App.css';

import SearchBar from "../Searchbar/Search"

function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className='App-playlist'>

      </div>
    </div>
  );
}

export default App;
