import React from "react";
import CartIcon from "../../cart/CartIcon";
import styleClasses from "./HeaderCardButton.module.css";

function HeaderCardButton(props) {
  return (
    <button className={styleClasses.button} type="button" onClick={props.onClick}>
      <span className={styleClasses.icon}>
        <CartIcon />
      </span>
      <span>Your cart </span>
      <span className={styleClasses.badge}>3</span>
    </button>
  );
}

export default HeaderCardButton;
