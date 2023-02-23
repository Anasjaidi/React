import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const toggleCounterHandler = () => {
    };
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)

    const showCounter = useSelector(state => state.showCounter)

    const incHandler = () => {
        dispatch({type: "INC"})
    }
    const decHandler = () => {
        dispatch({type: "DEC"})
    }

    const addHandler = () => {
        dispatch({type: "ADD", amount: 5})
    }

    const  toggleShowHandler = () => {
        dispatch({type: "toggle"})
    }

    return (<main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter ? <div className={classes.value}>
                {counter}
            </div> : null}
            <div>
                <button onClick={decHandler}>Dec</button>
                <button onClick={addHandler}>Add 5</button>
                <button onClick={incHandler}>Inc</button>

            </div>
            <button onClick={toggleShowHandler}>Toggle Counter</button>
        </main>);
};

export default Counter;
