import React from "react";
import './Track.css';

const Track = (props) => {
    const { track, onAdd, onRemove, isRemoval } = props;

    const handleAddClick = () => {
        onAdd(track);
    };

    const handleRemoveClick = () => {
        onRemove(track);
    };

    const renderAction = () => {
        if (isRemoval) {
          return (
            <button className="Track-action" onClick={handleRemoveClick}>
              -
            </button>
          );
        }
        return (
          <button className="Track-action" onClick={handleAddClick}>
            +
          </button>
        );
      };


    if (!track) {
        return null;
    }
    
    return (
        <div className="Track">
            <div className="Track-information">
            <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
            </div>
        {renderAction()}
        </div>
    )
};


export default Track;