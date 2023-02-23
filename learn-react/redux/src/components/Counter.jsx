import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

    const incHandler = () => {
      dispatch({type: "INC"})
    }
    const decHandler = () => {
        dispatch({type: "DEC"})
    }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
          {counter}
      </div>
        <div>
            <button onClick={incHandler}>Inc</button>
            <button onClick={decHandler}>Dec</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
