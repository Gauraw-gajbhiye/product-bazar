// store/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    priceRange: [0, 100000],
    sortOrder: 'relevance',
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        clearFilters: (state) => {
            state.categories = [];
        },
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload
        }
    },
});

export const { setCategories, clearFilters, setPriceRange, setSortOrder } = filterSlice.actions;

export default filterSlice.reducer;
