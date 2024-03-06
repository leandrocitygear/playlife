import React, { useCallback } from "react";
import './Track.css';

const Track = (props) => {

    const handleAddClick = useCallback((event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    const handleRemoveClick = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);


    const renderAction = () => {
        if (props.isRemoval) {
          return (
            <button className="Track-actionRem" onClick={handleRemoveClick}>
              -
            </button>
          );
        }
        return (
          <button className="Track-actionAdd" onClick={handleAddClick}>
            +
          </button>
        );
      };

    
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
    );
};


export default Track;