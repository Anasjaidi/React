import React from "react";
import DUMMY_MEALS from "../../data/meals";
import styleClasses from "./AvailbleMeals.module.css";
import Card from "../UI/Card/Card";

const AvailbleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li key={meal.id}>meal.name</li>);

  return (
    <section className={styleClasses.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailbleMeals;
