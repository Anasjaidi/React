import React from "react";
import DUMMY_MEALS from "../../data/meals";
import styleClasses from "./AvailbleMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";

const AvailbleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} name={meal.name} desc={meal.description} price={meal.price} />
  ));

  return (
    <section className={styleClasses.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailbleMeals;
