import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {}
    }
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addMovie } = favoritesSlice.actions;
