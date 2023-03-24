import React from 'react';
import Movie from '../movie';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromFavorites, removeFromWatchlist } from '../../store';

const MovieCollection = ({ collection }) => {
    const dispatch = useDispatch();
    const activeCollection = useSelector((state) => {
        return state.activeCollection;
    });

    const handleRemove = (imdbID, activeCollection) => {
        switch (activeCollection) {
            case process.env.REACT_APP_FAVORITES:
                dispatch(removeFromFavorites(imdbID));
                break;
            case process.env.REACT_APP_WATCHLIST:
                dispatch(removeFromWatchlist(imdbID));
                break;
            default:
                break;
        }
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collection.map((movie) => {
                return (
                    <div key={movie.imdbID} style={{ marginBottom: '20px' }}>
                        <Movie title={movie.Title} year={movie.Year} poster={movie.Poster} width='250' />
                        <button
                            type='button'
                            onClick={() => handleRemove(movie.imdbID, activeCollection)}
                            style={{ width: '250px', marginLeft: '20px' }}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieCollection;
