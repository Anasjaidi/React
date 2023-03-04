import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {

    }
})

export const {actions : uiSliceActions} = uiSlice
export default  uiSlice