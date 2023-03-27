import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../searchBar';
import ResultMovie from '../resultMovie';
import MovieCollection from '../movieCollection';
import { setActiveCollection, setSearchTerm } from '../../store';

const Body = () => {
    const searchTerm = useSelector((state) => {
        return state.searchTerm;
    });
    const favorites = useSelector((state) => {
        return state.favorites;
    });
    const watchlist = useSelector((state) => {
        return state.watchlist;
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToFavorites = () => {
        navigate('/favorites');
        dispatch(setActiveCollection(process.env.REACT_APP_FAVORITES));
        dispatch(setSearchTerm(''));
    };

    const navigateToHome = () => {
        navigate('/');
        dispatch(setActiveCollection(''));
        dispatch(setSearchTerm(''));
    };

    const navigateToWatchlist = () => {
        navigate('/watchlist');
        dispatch(setActiveCollection(process.env.REACT_APP_WATCHLIST));
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div
                        onClick={navigateToHome}
                        style={{ marginLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}
                    >
                        Home
                    </div>
                    <div
                        onClick={navigateToFavorites}
                        style={{ marginLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}
                    >
                        Favorites
                    </div>
                    <div
                        onClick={navigateToWatchlist}
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
                            {searchTerm ? <ResultMovie /> : null}
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
