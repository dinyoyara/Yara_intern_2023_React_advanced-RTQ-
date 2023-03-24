import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { searchResultApi } from './apis/searchResultApi';
import { searchReducer, setQuery } from './slices/searchSlice';
import { favoritesReducer, addToFavorites, removeFromFavorites } from './slices/favoritesSlice';
import { watchlistReducer } from './slices/watchlistSlice';
import { activeCollectionReducer, setActiveCollection } from './slices/activeCollecton';

const store = configureStore({
    reducer: {
        [searchResultApi.reducerPath]: searchResultApi.reducer,
        searchQuery: searchReducer,
        favorites: favoritesReducer,
        watchlist: watchlistReducer,
        activeCollection: activeCollectionReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(searchResultApi.middleware);
    }
});

setupListeners(store.dispatch);

export { store, setQuery, addToFavorites, removeFromFavorites, setActiveCollection };
export const { useFetchMoviesQuery } = searchResultApi;
