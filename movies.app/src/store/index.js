import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { moviesApi } from './apis/moviesApi';
import { favoritesReducer } from './slices/favoritesSlice';
import { watchlistReducer } from './slices/watchlistSlice';

export const store = configureStore({
    reducer: {
        movies: moviesApi.reducer,
        favorites: favoritesReducer,
        watchlist: watchlistReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(moviesApi.middleware);
    }
});

setupListeners(store.dispatch);
