import React from 'react';

export const SearchBar = () => {
    const handleSearch = (e) => {
        console.log();
    };

    return (
        <form>
            <label htmlFor='search-input'>Title: </label>
            <input id='search-input' type='text' />
            <button type='button' on onClick={handleSearch}>
                Search
            </button>
        </form>
    );
};
