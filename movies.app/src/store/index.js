import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { searchResultApi } from './apis/searchResultApi';
import { searchReducer, setSearchTerm, setSearchState } from './slices/searchSlice';
import { activeCollectionReducer, setActiveCollection } from './slices/activeCollectonSlice';
import { favoritesReducer, addToFavorites, removeFromFavorites } from './slices/favoritesSlice';
import { watchlistReducer, addToWatchlist, removeFromWatchlist } from './slices/watchlistSlice';

const store = configureStore({
    reducer: {
        [searchResultApi.reducerPath]: searchResultApi.reducer,
        search: searchReducer,
        favorites: favoritesReducer,
        watchlist: watchlistReducer,
        activeCollection: activeCollectionReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(searchResultApi.middleware);
    }
});

setupListeners(store.dispatch);

export {
    store,
    setSearchTerm,
    setSearchState,
    addToFavorites,
    removeFromFavorites,
    setActiveCollection,
    addToWatchlist,
    removeFromWatchlist
};
export const { useFetchMoviesQuery } = searchResultApi;
