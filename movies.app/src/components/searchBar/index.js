import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setQuery } from '../../store';

export const SearchBar = () => {
    const { inputValue, setInputValue } = useState();
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        dispatch(setQuery(inputValue));
    };

    return (
        <form>
            <label htmlFor='search-input'>Title: </label>
            <input id='search-input' type='text' onChange={handleInputChange} />
            <button type='button' onClick={handleSearch}>
                Search
            </button>
        </form>
    );
};
