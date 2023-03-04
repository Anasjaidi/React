import Card from '../UI/Card.jsx';
import classes from './ProductItem.module.css';
import {useDispatch} from "react-redux";
import {cartSliceActions} from "../../store/cartSlice.js";

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description, id } = props;

  function addItemButtonClickHandler(e) {
    dispatch(cartSliceActions.addItem({
      price,
      title,
      id,
      description,
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemButtonClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
