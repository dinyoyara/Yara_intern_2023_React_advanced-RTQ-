import React from 'react';

const Movie = ({ title, year, poster, width }) => {
    return (
        <div style={{ marginLeft: '20px' }}>
            <div style={{ marginBottom: '10px', width: `${width}px`, textAlign: 'center' }}>
                {title} - {year}
            </div>
            <img src={poster} alt={title} style={{ marginBottom: '10px', width: `${width}px` }} />
        </div>
    );
};

export default Movie;
