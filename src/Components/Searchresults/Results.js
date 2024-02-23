import React from "react";

import "./Results.css";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = (props) => {
    const { onAdd } = props;
return (
    <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>
    </div>
);
};

export default SearchResults; 