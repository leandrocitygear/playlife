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
    uri: 'spotify:track:1',
  },
  {
    id: '2',
    name: 'Time and place',
    artist: 'Last Dinosaurs',
    album: 'In a million years',
    uri: 'spotify:track:2',
  },
  {
    id: '3',
    name: 'On track',
    artist: 'Tame impala',
    album: 'The slow rush',
    uri: 'spotify:track:3',
  },
  {
    id: '4',
    name: 'jdjd',
    artist: 'jdjjjjj',
    album: 'eee',
    uri: 'spotify:track:4',
  },
]);
const [playlistName, setPlaylistName] = useState('New Playlist');
const [playlistTracks, setPlaylistTracks] = useState([
  {
    id: '1',
    name: 'Shiver',
    artist: 'Coldplay',
    album: 'Parashutes',
    uri: 'spotify:track:1',
  },
  {
    id: '2',
    name: 'Time and place',
    artist: 'Last Dinosaurs',
    album: 'In a million years',
    uri: 'spotify:track:2',
  },
  {
    id: '3',
    name: 'On track',
    artist: 'Tame impala',
    album: 'The slow rush',
    uri: 'spotify:track:3',
  },
  {
    id: '4',
    name: 'jdjd',
    artist: 'jdjjjjj',
    album: 'eee',
    uri: 'spotify:track:4',
  },
]);

const addTracksToPlaylist = (track) => {
  if (playlistTracks.some((savedTracks) => savedTracks.id === track.id)) 
  return

setPlaylistTracks((prevTracks) => [...prevTracks, track])
};

const removeTracksFromPlaylist = (track) => {
  setPlaylistTracks((prevTracks) => prevTracks.filter((currentTracks) => currentTracks.id !== track.id));
};

const updatedPlaylistName = (name) => {
  setPlaylistName(name);
};

const savePlaylist = () => {
  const trackUris = playlistTracks.map((track) => track.uri);
  savePlaylist(playlistName, trackUris).then(() => {
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  })

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
        onRemove={removeTracksFromPlaylist}
        onNameChange={updatedPlaylistName}
        onSave={savePlaylist}
        />
      
      </div>
    </div>
  );
}

export default App;
