import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const mealsItems = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
  ].map((item) => <li key={item.id}>{mealsItems.name}</li>);

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
