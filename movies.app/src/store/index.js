import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { userApi } from './apis/userApi';

export const store = configureStore({
    reducer: {
        users: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    }
});

setupListeners(store.dispatch);
