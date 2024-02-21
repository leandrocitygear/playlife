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
const [playlistName, setPlaylistName] = useState('New Playlist money');
const [playlistTracks, setPlaylistTracks] = useState([
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
  {
    id: '4',
    name: 'hdhdh',
    artist: 'fdfdf',
    album: 'fdfd',
  }
]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className='App-playlist'>
        <SearchResults searchResults={searchResults}/>
        <Playlist 
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistTracks={playlistTracks}
        />

      
      </div>
    </div>
  );
}

export default App;
