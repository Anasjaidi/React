import React from "react";
import styleClasses from "./mealItem.module.css";
import MealsForm from "./MealsForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styleClasses.meal}>
      <div>
        <h3 className={styleClasses.name}>{props.name}</h3>
        <div className={styleClasses.description}>{props.desc}</div>
        <div className={styleClasses.price}>{price}</div>
      </div>
      <MealsForm />
      <div />
    </li>
  );
};

export default MealItem;
