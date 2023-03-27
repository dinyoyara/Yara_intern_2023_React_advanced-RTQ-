import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        activated: false
    },
    reducers: {
        setSearchTerm(state, action) {
            return { ...state, searchTerm: action.payload };
        },
        setSearchState(state, action) {
            return { ...state, activated: action.payload };
        }
    }
});

export const { setSearchTerm, setSearchState } = SearchSlice.actions;
export const searchReducer = SearchSlice.reducer;
