import "./Search.css";
import React, {useState, useCallback} from "react";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);
    
    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    const enterSearch = useCallback((event) => {
        if (event.keyCode === 13) {
            return search();
        }
    });

    return (
        <div className="SearchBar">
            <input placeholder="Enter a Song Name" onChange={handleTermChange} onKeyDown={enterSearch} />
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );

};

export default SearchBar;