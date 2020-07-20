import React from 'react';

const Search = ({placeholder, handleChange, value}) => (
    <div className="search">
        <input type="search" className="form-control" placeholder={placeholder} onChange={handleChange} value ={value} autoFocus/>
    </div>
)

export default Search;