import ctx from "./cartContext.jsx";

const cartProvider = (props) => {
  const  addItem = (item) => {
  }
  const removeItem = (id) => {
  }
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem,
    removeItem,
  };
  return <ctx.Provider>{props.children}</ctx.Provider>;
};
