import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;

            const exsitingItem = state.items.find(el => el.id === newItem.id)

            if (!exsitingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                    name: newItem.title
                })
            } else {
                exsitingItem.quantity++;
                exsitingItem.totalPrice += exsitingItem.price
            }
        }
    }
})

export const {actions : cartSliceActions} = cartSlice
export default  cartSlice