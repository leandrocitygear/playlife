import React from "react";

import "./Results.css";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = (props) => {
return (
    <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist />
    </div>
);
};

export default SearchResults; 