import React from 'react';

import { useFetchMoviesQuery } from '../../store';

const ResultFilms = ({ searchQuery }) => {
    const { data, error, isFetching } = useFetchMoviesQuery(searchQuery);

    const handleAddToFav = (imdbID, Title, Year, Poster) => {
        console.log({ imdbID, Title, Year, Poster });
    };

    const handleAddToWatch = (imdbID, Title, Year, Poster) => {
        console.log({ imdbID, Title, Year, Poster });
    };

    let content;
    if (isFetching) {
        content = <div>Loading ....</div>;
    } else if (error) {
        content = <div>Error loading albums.</div>;
    } else {
        console.log(data);
        const { Title, Year, imdbID, Poster } = data;
        content = (
            <div style={{ marginLeft: '20px' }}>
                <div style={{ marginBottom: '10px', width: '300px', textAlign: 'center' }}>
                    {Title} - {Year}
                </div>
                <img src={Poster} alt={Title} style={{ marginBottom: '10px' }} />
                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
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
            </div>
        );
    }

    return <div>{content}</div>;
};

export default ResultFilms;
