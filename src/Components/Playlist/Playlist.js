
import React from "react";

import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
    return (
        <div className='Playlist'>
            <input defaultValue={"New Playlist"}/>
            <button className='Playlist-save'>Save to Spotify</button>

        </div>
    );
};

export default Playlist;