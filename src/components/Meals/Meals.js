import React, { Fragment } from "react";
import classes from "./Meals.module.css";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
