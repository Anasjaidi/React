import { useReducer } from "react";
import ctx from "./cartContext.jsx";

const default_cart_state = {
  items: [],
  totalAmount: 0,
};
const cartReduser = (state, action) => {
  if (action.type == "ADD") {
    console.log("hello");
    const updatedArray = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedArray,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type == "REMOVE") {
  }
  return default_cart_state;
};

const cartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReduser, default_cart_state);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <ctx.Provider
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem,
      }}
    >
      {props.children}
    </ctx.Provider>
  );
};

export default cartProvider;
