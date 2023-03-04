import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartSliceActions} from "../../store/cartSlice.js";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch()
  const removeItemButtonClickHandler = e => {
      dispatch(cartSliceActions.removeItem(id))
  }
  const addItemButtonClickHandler = e => {
      dispatch(cartSliceActions.addItem({
          title,
          id,
          price,
      }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}><span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemButtonClickHandler}>-</button>
          <button onClick={addItemButtonClickHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
