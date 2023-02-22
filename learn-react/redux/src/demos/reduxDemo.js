import redux from 'redux'

const counterReducer = (state = {counter : 0}, action) => {
    if (action.type == "INC") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type == "DEC") {
        return {
            counter: state.counter - 1
        }
    }
    return state;
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
store.dispatch({type: 'DEC'})
