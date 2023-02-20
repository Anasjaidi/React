import React, { useContext } from "react";
import CartIcon from "../../cart/CartIcon";
import styleClasses from "./HeaderCardButton.module.css";
import ctx from "../../../store/cartContext.jsx";

function HeaderCardButton(props) {
  const context = useContext(ctx);
  return (
    <button className={styleClasses.button} type="button" onClick={props.onClick}>
      <span className={styleClasses.icon}>
        <CartIcon />
      </span>
      <span>Your cart </span>
      <span className={styleClasses.badge}>
        {context.items.reduce((t, el) => {
          t + el.amount;
        }, 0)}{" "}
      </span>
    </button>
  );
}

export default HeaderCardButton;
