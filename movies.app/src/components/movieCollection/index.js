import React from 'react';
import Movie from '../movie';

const MovieCollection = ({ collection }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collection.map((movie) => {
                return (
                    <div key={movie.imdbID} style={{ marginBottom: '20px' }}>
                        <Movie title={movie.Title} year={movie.Year} poster={movie.Poster} width='250' />
                        <button type='button' onClick={() => {}} style={{ width: '250px', marginLeft: '20px' }}>
                            remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieCollection;
