import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Movie from '../movie';
import { useFetchMoviesQuery, addToFavorites, addToWatchlist } from '../../store';

const ResultMovie = () => {
    const searchQuery = useSelector((state) => {
        return state.searchQuery;
    });
    const { data, error, isFetching } = useFetchMoviesQuery(searchQuery);
    const dispatch = useDispatch();

    const handleAddToFav = (imdbID, Title, Year, Poster) => {
        dispatch(addToFavorites({ imdbID, Title, Year, Poster }));
    };

    const handleAddToWatch = (imdbID, Title, Year, Poster) => {
        dispatch(addToWatchlist({ imdbID, Title, Year, Poster }));
    };

    let content;
    if (isFetching) {
        content = <div>Loading ....</div>;
    } else if (error) {
        content = <div>Error loading albums.</div>;
    } else {
        const { Title, Year, imdbID, Poster } = data;
        content = (
            <>
                <Movie title={Title} year={Year} poster={Poster} width='300' />
                <div style={{ width: '300px', marginLeft: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        type='button'
                        onClick={() => handleAddToFav(imdbID, Title, Year, Poster)}
                        style={{ width: '100px' }}
                    >
                        favorites
                    </button>
                    <button
                        type='button'
                        onClick={() => handleAddToWatch(imdbID, Title, Year, Poster)}
                        style={{ width: '100px' }}
                    >
                        watchlist
                    </button>
                </div>
            </>
        );
    }

    return <div>{content}</div>;
};

export default ResultMovie;
