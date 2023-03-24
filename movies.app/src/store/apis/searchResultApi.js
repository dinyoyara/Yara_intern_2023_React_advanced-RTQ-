import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_API_KEY;

const searchResultApi = createApi({
    reducerPath: 'searchResults',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://www.omdbapi.com`
    }),
    endpoints: (builder) => {
        return {
            fetchMovies: builder.query({
                query: (searchQuery) => {
                    return {
                        url: '/',
                        method: 'GET',
                        params: {
                            t: searchQuery,
                            apikey: apiKey
                        }
                    };
                }
            })
        };
    }
});

export const { useFetchMoviesQuery } = searchResultApi;
export { searchResultApi };
