import {createStore} from 'redux'
import {createSlice, configureStore} from "@reduxjs/toolkit";

import counterReducer from "./counterStore.js"
import authReducer from "./authStore.js"

/**
 * redux-toolkit includes redux so you can delete redux
 * */

/*
const counterReducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {

            ...state,
            counter: state.counter + 1,
        }
    } else if (action.type === "DEC") {
        return {

            ...state,
            counter: state.counter - 1,
        }
    } else if (action.type === "ADD") {
        return {
            ...state,
            counter: state.counter + action.amount,
        }
    } else if (action.type === "toggle") {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }
    return state
}

const store = createStore(counterReducer)

*/

/**
 * this approach is only valid when we have one slice
 * */
// const storeWithOnlyOneSlice = createStore(counterSlice.reducer)

const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
})

// const storeSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState)
// }
//
// store.subscribe(storeSubscriber)
//
//
// store.dispatch({type: "ADD"})
export default store