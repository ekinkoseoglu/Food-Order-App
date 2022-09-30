import React, { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-test-c2ee8-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      console.log(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && <p className={classes.MealLoading}>Loading...</p>}
        {httpError && isLoading && (
          <p className={classes.MealsError}>{httpError}</p>
        )}
        {isLoading && !httpError && (
          <ul>
            {meals.map((meal) => (
              <MealItem
                key={meal.id}
                meal={meal}
                // name={meal.name}
                // description={meal.description}
                // price={meal.price}
              />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
