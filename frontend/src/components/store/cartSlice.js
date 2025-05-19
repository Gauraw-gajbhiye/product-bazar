import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({

    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        Addtocart: (state, action) => {
            // state.items.push({ ...action.payload, qty: 1 })
            // console.log("add", action.payload);
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty += 1; // increase qty
            } else {
                state.items.push({ ...action.payload, qty: 1 }); // set qty: 1
            }

        },
        Deletecart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        increaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload)
            if (item) item.qty += 1;
        },
        decreaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload)
            if (item) item.qty -= 1;
        },
    }
})
export const { Addtocart, Deletecart, increaseQty, decreaseQty } = cart.actions
export default cart.reducer