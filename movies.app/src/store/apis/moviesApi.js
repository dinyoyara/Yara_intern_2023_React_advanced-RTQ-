import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;

const moviesApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://www.omdbapi.com/?apikey=${apiKey}&t=`
    }),
    endpoints: (builder) => ({
        return: {
            fetchMoviesByTitle: builder.query({
                query: (searchQuery) => {
                    return {
                        url: `${searchQuery}`,
                        method: 'GET'
                    };
                }
            })
        }
    })
});

export const { useFetchMoviesByTitleQuery } = moviesApi;
export { moviesApi };
