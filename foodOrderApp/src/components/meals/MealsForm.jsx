import React from "react";
import stylesClasses from "./MealsForm.module.css";
import Input from "../UI/Input/Input";

const MealsForm = () => {
  return (
    <form className={stylesClasses.form}>
      <Input
        label="amount"
        input={{
          id: "amount",
          label: "amount",
          min: "1",
          max: "5",
          type: "number",
        }}
      />
      <button type="button">+ add</button>
    </form>
  );
};

export default MealsForm;
