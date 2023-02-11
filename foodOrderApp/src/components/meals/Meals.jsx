import React from "react";
import MealsSummary from "./MealsSummary";
import AvailbleMeals from "./AvailbleMeals";
import Main from "../../components/UI/main/Main"


const Meals = () => {
  return (
    <Main>
      <MealsSummary />
      <AvailbleMeals />
    </Main>
  );
};

export default Meals;
