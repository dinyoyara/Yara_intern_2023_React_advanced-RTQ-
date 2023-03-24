import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: [],
    reducers: {
        addToWatchlist(state, action) {
            state.push(action.payload);
        },
        removeFromWatchlist(state, action) {
            const index = state.findIndex((x) => x.imdbID === action.payload);
            console.log(index);
            state.splice(index, 1);
        }
    }
});

export const watchlistReducer = watchlistSlice.reducer;
export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
