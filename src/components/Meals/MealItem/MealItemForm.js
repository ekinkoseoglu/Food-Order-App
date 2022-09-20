import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      // if enteredAmount is not a number or is less than 1 or is greater than 5 then return false and setAmountIsValid to false and return out of the function
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);

      return; // do nothing if the input is invalid (not a number or not in the range 1-5), we could also show an error message;
    }

    props.onAddToCart(enteredAmountNumber); // if the input is valid, we pass the entered amount to the parent component (MealItem.js)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount" // label is a prop of Input component (see src\components\UI\Input.js)
        ref={amountRef} // <-- here is the ref prop being passed to the Input component (which is a forwardRef component)
        input={{
          // <-- here is the input prop being passed to the Input component
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
