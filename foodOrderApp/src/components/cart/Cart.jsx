import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const mealsItems = (
    <ul className={styles["cart-items"]}>
      {[
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
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {mealsItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>39.17</span>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button type="button" className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
