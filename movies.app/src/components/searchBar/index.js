import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setQuery } from '../../store';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        dispatch(setQuery(inputValue));
    };

    const handleClear = () => {
        dispatch(setQuery(''));
        setInputValue('');
    };

    return (
        <form style={{ margin: '20px' }}>
            <label htmlFor='search-input'>Title: </label>
            <input id='search-input' type='text' onChange={handleInputChange} value={inputValue} />
            <button
                type='button'
                onClick={handleSearch}
                style={{ width: '100px', marginLeft: '10px', marginRight: '10px' }}
            >
                Search
            </button>
            <button type='button' onClick={handleClear} style={{ width: '100px' }}>
                Clear
            </button>
        </form>
    );
};

export default SearchBar;
