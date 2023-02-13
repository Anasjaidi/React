import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles["cart-items"]}>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>39.17</span>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles["button--alt"]}>
          Close
        </button>
        <button type="button" className={styles.button}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
