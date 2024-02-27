import "./Search.css";
import React, {useState, useCallback} from "react";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");
    return (
        <div className="SearchBar">
            <input placeholder="Enter a Song Name" />
            <button className="searchbutton">Search</button>
        </div>
    );

};

export default SearchBar;