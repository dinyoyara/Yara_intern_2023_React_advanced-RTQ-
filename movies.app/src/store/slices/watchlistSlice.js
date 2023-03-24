import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: []
});

export const watchlistReducer = watchlistSlice.reducer;
