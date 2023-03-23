import { createSlice } from '@reduxjs/toolkit';

const WatchlistSlice = createSlice({
    name: 'favorites',
    initialState: {
        isLoading: false,
        error: null,
        data: []
    }
});

export const watchlistReducer = WatchlistSlice.reducer;
