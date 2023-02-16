import { useState, useRef } from "react";

const SimpleInput = (props) => {
	const [nameInput, setNameInput] = useState("");
	const [formIsValid, setFormIsValid] = useState(true);
	const nameInputRef = useRef();

	const nameInputOnChangeHandler = (e) => {
		setNameInput(e.target.value);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (nameInput === "") {
      setFormIsValid(false)
			return;
		}

    setFormIsValid(true)

		console.log(nameInput);

		// console.log(nameInputRef.current.value)

		// nameInputRef.current.value = "", is worked but not ideal

		setNameInput(""); // for reset the input
	};

	const feedback = formIsValid ? null : (
		<p className="error-text">name is empty</p>
	);

	const formClass = formIsValid ? "form-control" : "form-control invalid";

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={formClass}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					ref={nameInputRef}
					onChange={nameInputOnChangeHandler}
					value={nameInput}
				/>
				{feedback}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
