import { useState, useRef } from "react";

const SimpleInput = (props) => {
	const [nameInput, setNameInput] = useState("");
	// const [formIsValid, setFormIsValid] = useState(false);
  const [isInputTouched, setIsInputTouched] = useState(false);
	// const nameInputRef = useRef();

	const formIsValid = nameInput.trim() != '';
	const nameInputOnChangeHandler = (e) => {
		setNameInput(e.target.value);
	};

	const nameInputOnBlurHandler = e => {
		setIsInputTouched(true);
		// if (nameInput === "") {
		// 	setFormIsValid(false)
		// 	return;
		// }
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();

    setIsInputTouched(true);

		if (nameInput === "") {
      // setFormIsValid(false)
			return;
		}

    // setFormIsValid(true)

		// console.log(nameInput);

		// console.log(nameInputRef.current.value)

		// nameInputRef.current.value = "", is worked but not ideal

		setNameInput(""); // for reset the input
		setIsInputTouched(false)
	};

	const feedback = formIsValid  || !isInputTouched ? null : (
		<p className="error-text">name is empty</p>
	);

	const formClass =
		formIsValid || !isInputTouched ? "form-control" : "form-control invalid";

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={formClass}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					// ref={nameInputRef}
					onBlur={nameInputOnBlurHandler}
					onChange={nameInputOnChangeHandler}
					value={nameInput}
				/>
				{feedback}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
