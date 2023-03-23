import React from 'react';

import { useSelector } from 'react-redux';

import SearchBar from './components/searchBar';
import ResultFilms from './components/resultFilms';

const App = () => {
    const searchQuery = useSelector((state) => {
        return state.searchQuery;
    });

    return (
        <>
            <SearchBar />
            {searchQuery ? <ResultFilms searchQuery={searchQuery} /> : null}
        </>
    );
};

export default App;
