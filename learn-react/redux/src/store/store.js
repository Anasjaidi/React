import {createStore} from 'redux'

const initialState =  {counter : 0, showCounter : true}
const counterReducer = (state = initialState, action) => {
    if (action.type ==="INC") {
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