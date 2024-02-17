import React from "react";
import Track from "../Track/Track";
import './Tracklist.css';


const Tracklist = ({ tracks }) => {
    return (
        <div className="Tracklist">
            {tracks.map((track) => {
                return (
                    <Track 
                    key={track.id}
                    track={track}
                    />
                )
            })}

        </div>
    )
}

export default Tracklist;