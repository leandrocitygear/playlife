
import React from "react";

import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
    const { playlistName, setPlaylistName, playlistTracks, onNameChange, onSave } = props;

    const handleNameChange = (event) => {
        onNameChange(event.target.value)
    };

    return (
        <div className='Playlist'>
            <input type="text" value={playlistName} onChange={handleNameChange}/>
            <button className='Playlist-save' onClick={onSave}>Save to Spotify</button>
            <Tracklist 
            tracks={playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}
            />
        </div>
    );
};

export default Playlist;