import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.API_KEY;

const searchResultApi = createApi({
    reducerPath: 'searchResults',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://www.omdbapi.com/?apikey=${apiKey}&t=`
    }),
    endpoints: (builder) => {
        return {
            fetchMovies: builder.query({
                query: (searchQuery) => {
                    return {
                        url: `${searchQuery}`,
                        method: 'GET'
                    };
                }
            })
        };
    }
});

export const { useFetchMoviesQuery } = searchResultApi;
export { searchResultApi };
