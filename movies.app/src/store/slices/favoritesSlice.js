import { createSlice } from '@reduxjs/toolkit';

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        isLoading: false,
        error: null,
        data: []
    }
});

export const favoritesReducer = FavoritesSlice.reducer;
