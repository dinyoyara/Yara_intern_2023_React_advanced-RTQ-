import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites(state, action) {
            state.push(action.payload);
        },
        removeFromFavorites(state, action) {
            const index = state.findIndex((x) => x.imdbID === action.payload);
            console.log(index);
            state.splice(index, 1);
        }
    }
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
