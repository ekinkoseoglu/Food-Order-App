import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
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
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
