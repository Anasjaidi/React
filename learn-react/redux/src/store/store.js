import {createStore} from 'redux'
import {createSlice, configureStore} from "@reduxjs/toolkit";
/**
 * redux-toolkit includes redux so you can delete redux
 * */

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: "counter",
    initialState,
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
        toogle: state => {
            state.showCounter = !state.showCounter
        }
    }
})


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


/**
 * this approach is only valid when we have one slice
 * */
const storeWithOnlyOneSlice = createStore(counterSlice.reducer)

const store2 = configureStore({
    reducer: counterSlice.reducer
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


export const storeActions = counterSlice.actions
export default store2