import {createStore} from 'redux'


const counterReducer = (state = {counter : 0}, action) => {
    if (action.type ==="INC") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === "DEC") {
        return {
            counter: state.counter - 1
        }
    } else if (action.type === "ADD") {
        return {
            counter: state.counter + action.amount
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