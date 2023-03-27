//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchTerm, setSearchState } from '../../store';

const SearchBar = () => {
    //const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const search = useSelector((state) => {
        return state.search;
    });

    const handleInputChange = (e) => {
        dispatch(setSearchState(false));
        const inputValue = e.target.value;
        if (!inputValue.match(/[A_Za-z0-9]+/)) {
            return;
        }
        dispatch(setSearchTerm(inputValue));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.searchTerm.match(/[A_Za-z0-9]+/)) {
            dispatch(setSearchState(true));
        }
    };

    const handleClear = () => {
        dispatch(setSearchState(false));
        dispatch(setSearchTerm(''));
        //setInputValue('');
    };

    return (
        <form onSubmit={handleSearch} style={{ margin: '20px' }}>
            <label htmlFor='search-input'>Title: </label>
            <input id='search-input' type='text' onChange={handleInputChange} value={search.searchTerm} />
            <button style={{ width: '100px', marginLeft: '10px', marginRight: '10px' }}>Search</button>
            <button type='button' onClick={handleClear} style={{ width: '100px' }}>
                Clear
            </button>
        </form>
    );
};

export default SearchBar;
