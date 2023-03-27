import { createSlice } from '@reduxjs/toolkit';

const SearchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm(state, action) {
            return action.payload;
        }
    }
});

export const { setSearchTerm } = SearchTermSlice.actions;
export const searchReducer = SearchTermSlice.reducer;
