import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Movie from '../movie';
import { useFetchMoviesQuery, addToFavorites, addToWatchlist } from '../../store';

const ResultMovie = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => {
        return state.search;
    });
    const favorites = useSelector((state) => {
        return state.favorites;
    });
    const watchlist = useSelector((state) => {
        return state.watchlist;
    });
    const { data, error, isFetching } = useFetchMoviesQuery(search.searchTerm);

    const handleAddToFav = (imdbID, Title, Year, Poster) => {
        if (favorites.some((x) => x.imdbID === imdbID)) {
            alert('already in the collection');
            return;
        }
        dispatch(addToFavorites({ imdbID, Title, Year, Poster }));
    };

    const handleAddToWatch = (imdbID, Title, Year, Poster) => {
        if (watchlist.some((x) => x.imdbID === imdbID)) {
            alert('already in the collection');
            return;
        }
        dispatch(addToWatchlist({ imdbID, Title, Year, Poster }));
    };

    let content;
    if (isFetching) {
        content = <div>Loading ....</div>;
    } else if (error) {
        content = <div>Error loading movie!</div>;
    } else if (data.Error) {
        content = <div>{data.Error}</div>;
    } else {
        const { Title, Year, imdbID, Poster } = data;
        content = (
            <>
                <Movie title={Title} year={Year} poster={Poster} width='300' />
                <div style={{ width: '300px', marginLeft: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        type='button'
                        onClick={() => handleAddToFav(imdbID, Title, Year, Poster)}
                        style={{ width: '120px' }}
                    >
                        Add to Favorites
                    </button>
                    <button
                        type='button'
                        onClick={() => handleAddToWatch(imdbID, Title, Year, Poster)}
                        style={{ width: '120px' }}
                    >
                        Add to Watchlist
                    </button>
                </div>
            </>
        );
    }

    return <div>{content}</div>;
};

export default ResultMovie;
