import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { searchResultApi } from './apis/searchResultApi';
import { favoritesReducer, addToFavorites } from './slices/favoritesSlice';
import { watchlistReducer } from './slices/watchlistSlice';
import { searchReducer, setQuery } from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        [searchResultApi.reducerPath]: searchResultApi.reducer,
        searchQuery: searchReducer,
        favorites: favoritesReducer,
        watchlist: watchlistReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(searchResultApi.middleware);
    }
});

setupListeners(store.dispatch);

export { setQuery, addToFavorites };
export const { useFetchMoviesQuery } = searchResultApi;
