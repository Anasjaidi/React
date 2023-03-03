import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true}


const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        inc: (state) => {
            state.counter++;
        },
        dec: (state) => {
            state.counter--;
        },
        increase: (state, payload) => {
            state.counter += payload.payload.amount
        },
        toggle: state => {
            state.showCounter = !state.showCounter
        }
    }
})

export const storeActions = counterSlice.actions
export default counterSlice.reducer
