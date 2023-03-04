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

            const existingItem = state.items.find(el => el.id === newItem.id)

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price
            }
        },
        removeItem : (state, action) => {
            const id = action.payload

            const existingItem = state.items.find(el => el.id === id)

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(el => el.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
})

export const {actions : cartSliceActions} = cartSlice
export default  cartSlice