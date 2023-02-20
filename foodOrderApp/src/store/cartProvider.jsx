import ctx from "./cartContext.jsx";


const default_cart_state = {
  items: [], totalAmount: 0
};
const cartReduser = (state, action) => {
  if (action.type == "ADD") {
    const updatedArray = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedArray, totalAmount: updatedTotalAmount
    };
  } else if (action.type == "REMOVE") {

  }
};

import { useReducer } from "react";

const cartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReduser, default_cart_state);
  const addItem = (item) => {
    dispatch({ type: "ADD", item });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", id });
  };
  const cartContext = {
    items: [], totalAmount: 0, addItem, removeItem
  };
  return <ctx.Provider value={cartContext}>{props.children}</ctx.Provider>;
};

export default cartProvider;
