import React, { useState, useCallback } from 'react';
import './App.css';

import SearchBar from "../Searchbar/Search"
import SearchResults from '../Searchresults/Results';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';
import Track from '../Track/Track';

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
  {
    id: '4',
    name: 'jdjd',
    artist: 'jdjjjjj',
    album: 'eee',
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

const addTracksToPlaylist = (track) => {
  if (playlistTracks.some((savedTracks) => savedTracks.id === track.id)) {
setPlaylistTracks([...playlistTracks, track])
  }
}

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className='App-playlist'>
        <SearchResults searchResults={searchResults} onAdd={addTracksToPlaylist}/>
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
