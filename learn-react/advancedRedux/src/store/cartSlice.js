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

            } else {

            }
        }
    }
})

export const {actions : cartSliceActions} = cartSlice
export default  cartSlice