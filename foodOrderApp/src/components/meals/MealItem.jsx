import React, { useContext } from "react";
import styleClasses from "./mealItem.module.css";
import MealsForm from "./MealsForm";
import ctx from "../../store/cartContext.jsx";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const context = useContext(ctx);
  const mealsFormAddHandler = (n) => {
    context.addItem({ amount: n, price: props.price, name: props.name, id: props.id });
  };
  return (
    <li className={styleClasses.meal}>
      <div>
        <h3 className={styleClasses.name}>{props.name}</h3>
        <div className={styleClasses.description}>{props.desc}</div>
        <div className={styleClasses.price}>{price}</div>
      </div>
      <MealsForm setAmount={mealsFormAddHandler} />
      <div />
    </li>
  );
};

export default MealItem;
