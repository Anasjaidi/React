const redux = require('redux')

const counterReducer = (state = {counter : -1}, action) => {
    return {
        counter : action.type == "INC" ? state.counter++ : state.counter--,
    }
}

const store = redux.createStore(counterReducer)


const subscriber = () => {
    const data = store.getState();
    console.log(data)
}

store.subscribe(subscriber)

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})

console.log(store.getState())