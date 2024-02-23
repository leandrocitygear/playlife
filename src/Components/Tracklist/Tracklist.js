import React from "react";
import Track from "../Track/Track";
import './Tracklist.css';


const Tracklist = (props) => {
    const { playlistTracks, onAdd, searchResults} = props;

if (!props.tracks) {
    return null;
}

    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track 
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    />
                )
            })}
<Tracklist playlistTracks={playlistTracks}/>
        </div>
    )
}

export default Tracklist;