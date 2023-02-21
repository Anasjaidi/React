import React, { useRef, useState, useContext } from "react";
import stylesClasses from "./MealsForm.module.css";
import Input from "../UI/Input/Input";
import ctx from "../../store/cartContext.jsx";

const MealsForm = (props) => {
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const context = useContext(ctx);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const entredAmount = +inputRef.current.value;
    if (entredAmount < 0 || entredAmount > 5) {
      setError(true);
    }
    props.setAmount(entredAmount);
  };

  return (
    <form className={stylesClasses.form} onSubmit={formSubmitHandler}>
      <Input
        label="amount"
        ref={inputRef}
        input={{
          id: "amount",
          label: "amount",
          min: "1",
          max: "5",
          type: "number"
        }}
      />
      {error && <p>error</p>}
      <button type="submit">+ add</button>
    </form>
  );
};

export default MealsForm;
