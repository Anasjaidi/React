import React from "react";
import DUMMY_MEALS from "../../data/meals";
import styleClasses from "./AvailbleMeals.module.css";

const AvailbleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li key={meal.id}>meal.name</li>);

  return (
    <section className={styleClasses.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailbleMeals;
