import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
    name: 'searchQuery',
    initialState: '',
    reducers: {
        setQuery(state, action) {
            return action.payload;
        }
    }
});

export const { setQuery } = SearchSlice.actions;
export const searchReducer = SearchSlice.reducer;
