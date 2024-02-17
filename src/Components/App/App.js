import React, { useState, useCallback } from 'react';
import './App.css';

import SearchBar from "../Searchbar/Search"
import SearchResults from '../Searchresults/Results';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';

function App() {
const [searchResults, setSearchResults] = useState([
  {
    id: '1',
    name: 'Shiver',
    artist: 'Coldplay',
    album: 'Parashutes',
  },
  {
    id: '2',
    name: 'Time and place',
    artist: 'Last Dinosaurs',
    album: 'In a million years',
  },
  {
    id: '3',
    name: 'On track',
    artist: 'Tame impala',
    album: 'The slow rush',
  },
]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <Tracklist tracks={searchResults}/>
      <div className='App-playlist'>
        <SearchResults />
        <Playlist />

      
      </div>
    </div>
  );
}

export default App;
