import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {uiSliceActions} from "../../store/uiSlice.js";
const CartButton = (props) => {
    const dispatch = useDispatch()
    const toggleCartHandler = e => {
        e.preventDefault()
        dispatch(uiSliceActions.toggle())
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
