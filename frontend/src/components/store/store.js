import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import cartReducer from './cartSlice'
import filterReducer from './filterSlice'
const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        filter: filterReducer,
    }
})
export default store