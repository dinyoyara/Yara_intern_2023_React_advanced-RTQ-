import React from 'react';

import { useFetchMoviesQuery } from '../../store';

const ResultFilms = ({ searchQuery }) => {
    const { data, error, isFetching } = useFetchMoviesQuery(searchQuery);

    return <div>{data}</div>;
};

export default ResultFilms;
