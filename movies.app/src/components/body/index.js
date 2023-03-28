import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../searchBar';
import ResultMovie from '../resultMovie';
import MovieCollection from '../movieCollection';
import { setActiveCollection } from '../../store';

const Body = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const search = useSelector((state) => state.search);
    const favorites = useSelector((state) => state.favorites);
    const watchlist = useSelector((state) => state.watchlist);

    const navigateToHome = () => {
        navigate('/');
        dispatch(setActiveCollection(''));
    };

    const navigateToFavorites = () => {
        navigate('/favorites');
        dispatch(setActiveCollection(process.env.REACT_APP_FAVORITES));
    };

    const navigateToWatchlist = () => {
        navigate('/watchlist');
        dispatch(setActiveCollection(process.env.REACT_APP_WATCHLIST));
    };

    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
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
            </nav>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <>
                            <SearchBar />
                            {search.activated ? <ResultMovie /> : null}
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
