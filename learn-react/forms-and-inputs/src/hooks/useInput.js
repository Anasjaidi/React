import { useState } from "react";

const useInput = (validate = (str) => str.trim() != '') => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validate(entredValue)
  const hasErr = !inputIsValid && isTouched;

  const reset = () => {
    setEntredValue("")
    setIsTouched(false)
  }

  const inputOnChangeHandler = (e) => {
		setEntredValue(e.target.value);
	};

	const inputOnBlurHandler = (e) => {
		setIsTouched(true);
	};

  return {entredValue, hasErr, changeHandler: inputOnChangeHandler, blurHandler: inputOnBlurHandler, reset, inputIsValid, isTouched}
}

export default useInput