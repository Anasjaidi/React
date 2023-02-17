import React, {useState} from 'react'

const useInput = (validate = str => str.trim() !== '') => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validate(enteredValue);
  const hasErr = !inputIsValid && isTouched;

  const reset = () => {
    setEnteredValue("")
    setIsTouched(false)
  }

  const inputBlurHandler = e => {
    setIsTouched(true)
  }

  const inputChangeHandler = e => {
    setEnteredValue(e.target.value)
  }

  return {
    value: enteredValue,
    isValid: inputIsValid,
    hasErr,
    changeHandler: inputChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
  }
}

export default useInput