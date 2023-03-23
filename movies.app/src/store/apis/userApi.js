import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;

const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://www.omdbapi.com/?apikey=${apiKey}&`
    }),
    endpoints: (builder) => ({})
});

export { userApi };
