import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchBar from '../searchBar';
import ResultMovie from '../resultMovie';
import MovieCollection from '../movieCollection';

const Body = () => {
    const searchQuery = useSelector((state) => {
        return state.searchQuery;
    });
    const favorites = useSelector((state) => {
        return state.favorites;
    });
    const watchlist = useSelector((state) => {
        return state.watchlist;
    });
    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div
                        onClick={() => navigate('/')}
                        style={{ marginLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}
                    >
                        Home
                    </div>
                    <div
                        onClick={() => navigate('/favorites')}
                        style={{ marginLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}
                    >
                        Favorites
                    </div>
                    <div
                        onClick={() => navigate('/watchlist')}
                        style={{ marginLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}
                    >
                        Watchlist
                    </div>
                </div>
            </div>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <>
                            <SearchBar />
                            {searchQuery ? <ResultMovie /> : null}
                        </>
                    }
                ></Route>
                <Route exact path='/favorites' element={<MovieCollection collection={favorites} />} />
                <Route exact path='/watchlist' element={<MovieCollection collection={watchlist} />} />
            </Routes>
        </>
    );
};

export default Body;
