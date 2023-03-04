import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})

export const {actions : cartSliceActions} = cartSlice
export default  cartSlice