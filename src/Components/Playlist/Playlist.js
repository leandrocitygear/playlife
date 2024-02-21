
import React from "react";

import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
    const { playlistName, setPlaylistName, playlistTracks } = props;

    return (
        <div className='Playlist'>
            <input type="text" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}/>
            <button className='Playlist-save'>Save to Spotify</button>
            <Tracklist 
            tracks={props.playlistTracks}
            />
        </div>
    );
};

export default Playlist;