import { createSlice } from '@reduxjs/toolkit';

const activeCollectionSlice = createSlice({
    name: 'favorites',
    initialState: '',
    reducers: {
        setActiveCollection(state, actions) {
            return actions.payload;
        }
    }
});

export const activeCollectionReducer = activeCollectionSlice.reducer;
export const { setActiveCollection } = activeCollectionSlice.actions;
